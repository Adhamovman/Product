import React, { Component } from "react";

export class FutureCard extends Component {
  render() {
    const { image, heading, text, color } = this.props;
    return (
      <div className="future-card">
        <img src={image} alt={heading} style={{ backgroundColor: color }} />
        <h3 className="card-heading">{heading}</h3>
        <p className="main-p">{text}</p>
      </div>
    );
  }
}

export default FutureCard;
