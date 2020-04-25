import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

const Headers = {
  "method": "GET",
    "headers": {
    "api":"scheffler",
    "Content-Type" : "application/json",
    "Accept":"application/json"
  }
}

const Headers2 = {
  "method": "POST",
  "headers": {
    "api":"scheffler",
    "Content-Type" : "application/json",
    "Accept":"application/json"
  }
}

export default class LinksScreen extends React.Component {

  state = {contacts:[]}

  componentDidMount() {
    console.log("Effect has run")
    this.setState({contacts:[]})
    new Promise((resolve, reject) => {
        resolve(fetch("http://plato.mrl.ai:8080/contacts", Headers)
        .then(response => response.json())
          .then(body => this.setState({contacts:body.contacts})))}, 3000)
    }

    render() {
      return (
    
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Contacts List</Text>   

          { this.state.contacts.map((contact, i) => <Card key={i} title={`name: ${contact.name} number: ${contact.number}`}/>)}

        </ScrollView>
        
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  text: {
    fontSize: 35,
    textAlign: "center",
  },
});
