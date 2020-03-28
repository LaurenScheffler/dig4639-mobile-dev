import './index.css';
import React from 'react';

class Card extends React.Component {

  render() { 
    return  (<div className="card">
              <span className="close" onClick={() => this.props.clickThis()}>&times;</span>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
              </div>);
  }
  }

export default Card; 