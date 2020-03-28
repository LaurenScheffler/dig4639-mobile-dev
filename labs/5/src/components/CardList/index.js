import React from "react";
import Card from "../Card/";

class CardList extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { cards:this.props.data.map((v,i) => {
        v.id = i
        return v
      }) }
    }
    
    async getServerData() {
      fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
        .then(res => res.json())
        .then((result) => {console.log(result.properties.periods)
        this.setState({cards:result.properties.periods})
      });
    }

    componentDidMount() {
      console.log("Component did mount!")
      this.getServerData()
    }

    clickMe(id) {
      console.log("Clicked" + id) 
      console.log(this.state.cards)
      let cards = this.state.cards.filter((v) => v.id !== id)
      console.log(cards)
      this.setState({cards:cards})
    }

    render() {
      console.log(this.state.cards)
      return(
        this.state.cards.map((v,i) => 
        <Card key={v.id} clickMe={() => this.clickMe(v.id)} id={v.id} 
        name={v.name}
        temperature={v.temperature}
        temperatureUnit={v.temperatureUnit}
        detailedForecast={v.detailedForecast}

        >


            
  
          </Card>
        ) 
      )

  }
}

export default CardList