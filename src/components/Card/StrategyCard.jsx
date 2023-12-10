import React, { Component } from "react";

export class StrategyCard extends Component {
  render() {
    const { image, author, text, heading } = this.props;
    return (
      <div className="card">
        <img className="card-icon" src={image} alt={heading} />
        <div className="card-body">
          <p className="card-author">{author}</p>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default StrategyCard;
