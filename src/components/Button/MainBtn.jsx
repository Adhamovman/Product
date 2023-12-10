import React, { Component } from "react";

export class MainBtn extends Component {
  render() {
    return <button className="btn btn-main">{this.props.children}</button>;
  }
}

export default MainBtn;
