import React from 'react';
import './App.css';
import CardList from './components/CardList/index.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content:"", list: []}
  }
  

render() {
  return (
        <CardList 
          data={this.state.list}
          >
          </CardList>
    )
  }
}


export default App;