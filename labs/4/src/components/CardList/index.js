import React from "react";
import Card from"../Card/";
import data from "./data.json";

  class CardList extends React.Component{
    constructor(props){
      super(props);
      this.state = { cards:data.cards.map((v,i) => {
      v.id = i
      return v
      }) }
    }

  clickThis(id){
    console.log("Clicked" + id)
    console.log(this.state.cards)
    let cards = this.state.cards.filter((v) => v.id !== id)
    console.log(cards)
    this.setState({cards:cards})
    }

  render(){
    return(
    this.state.cards.map((v,i) =>
    <Card key={v.id} clickThis={() => this.clickThis(v.id)} id={v.id} content={v.content} title={v.title}></Card>))
  }
  
}

export default CardList;
