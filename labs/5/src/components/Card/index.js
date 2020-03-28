import "./index.css"
import React from 'react'

class Card extends React.Component {
    render() {
        return (
        <div className = "card">
            <span className="close"
            onClick={() => this.props.clickMe()} 
        >&times;</span>
            <p><strong>{this.props.name}</strong></p>
        <p><strong>{this.props.temperature}</strong>
        <strong>{this.props.temperatureUnit}</strong></p>
        <p>{this.props.detailedForecast}</p>
        </div>
        )
    }
    
}
export default Card;