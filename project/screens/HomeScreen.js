/*import * as WebBrowser from 'expo-web-browser';*/
import * as React from 'react';
import { Button, ScrollView, StyleSheet, TextInput, View, Text } from 'react-native';
import { CheckBox, Card } from 'react-native-elements'

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

export default class HomeScreen extends React.Component {
  
  state = {contacts:[], name:"", number:"", add:[], remove:[]}
 
    callApi() {
      window.fetch("http://plato.mrl.ai:8080", Headers)
      .then(response => response.json())
      .then(body => console.log(body))
    }
 
    componentDidMount() {
      console.log("Effect has run")
      this.setState({contacts:[]})
      new Promise((resolve, reject) => {
          resolve(fetch("http://plato.mrl.ai:8080/contacts", Headers)
          .then(response => response.json())
            .then(body => this.setState({contacts:body.contacts})))}, 3000)
      }
 
      AddContact(position, state) {
        console.log("Effect has run again")
          console.log(this.state.name)
          console.log(this.state.number)
        window.fetch("http://plato.mrl.ai:8080/contacts/add",
          {
            ...Headers2,
            body: JSON.stringify({name: this.state.name, number: this.state.number })
          })
            .then(response => response.json())
            .then(body => {
              console.log(body)
              if(body.updated != undefined) {
                const listed = [...this.state.body.contacts]
                listed[position].completed = state
                this.setState({listed: body.contacts})
              }
          })
      }
      

      RemoveContact(position){
        window.fetch("http://plato.mrl.ai:8080/contacts/remove",
          {
            ...Headers2,
            body: JSON.stringify({position:position})
          })
            .then(response => response.json())
            .then(body => {
              console.log(body)
              if(body.removed != undefined) {
                const currentList = this.state.contacts.filter((v,i) =>
                (i !== position))
                this.setState({contacts: currentList})
              }
            })
        } 
      
        completeTask(position, state) {
          fetch("http://plato.mrl.ai:8080/contacts/state", {
            ...Headers2,
            body: JSON.stringify({position: position, status: state})
          })
          .then(response => response.json())
          .then(body => {
            console.log(body)
            if(body.updated != undefined) {
              const currentList = [...this.state.contacts]
              currentList[position].completed = state
              this.setState({contacts: currentList})
            }
          })
        }

      

    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            
            <TextInput style = {styles.input}
              placeholder = "Contact Name"
              placeholderTextColor = "#040404"
              autoCapitalize = "none"
              onChangeText={text => {this.setState({name:text})}}
            />
            <TextInput style = {styles.input}
              placeholder = "Phone Number"
              placeholderTextColor = "#040404"
              autoCapitalize = "none"
              onChangeText={text => {this.setState({number:text})}}
            />
            
             <Text style={styles.text}>Contacts List</Text>   
            
            { this.state.contacts.map((contact, i) => 
            <View style={styles.contactView}>
            <CheckBox 
              checked={contact.selected} 
              onPress={ () => this.completeTask(i, !contact.completed) }/>
            <Card key={i} title={`name: ${contact.name} number: ${contact.number}`}/>
            </View>)}

            
          </ScrollView>
            <Button
              color = "#119DA4"
              style = {styles.submitButton}
              title="Add Contact"
              onPress = { () => this.AddContact() }
              />
            
            <Button
              color = "#0C7489"
              title="Delete Contact" 
              onPress={ () => this.DeleteContact(index) }
              />

            <Button
              onPress={ () => this.callApi() }
              title="Call the API"
              color="#13505B"
              accessibilityLabel="Calls the remote API for contacts"
              />   
          </View>
      );
    }
}
            /*
            
            */
 
HomeScreen.navigationOptions = {
  header: null,
};


/*function DevelopmentModeNotice(){ 
  if (_DEV_) { 
    const learnMoreButton = ( 
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}> 
        Learn more
      </Text>
    ); 
    
    return( 
      <Text style={styles.developmentModeText}> 
        Development mode is enabled: your app will be slower but you can use useful development tools. {learnMoreButton}
    </Text> 
    );

  }else { 
    return ( 
      <Text style={styles.developmentModeText}> 
      You are not in development mode: your app will run at full speed 
      </Text>
    ); 
    
  }

}

function handleLearnMorePress() { 
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode'); 
}
function handleHelpPress () { 
  WebBrowser.openBrowserAsync( 
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  ); 
  
}*/

const styles = StyleSheet.create({
  contactView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  input: {
    margin: 15,
    height: 45,
    borderColor: '#040404',
    borderWidth: 0.5,
    backgroundColor: '#fff'
  },
  submitButton: {
    padding: 10,
    margin: 20,
    height: 45,
 },
  contentContainer: {
    paddingTop: 30,
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 15,
  },
  
});