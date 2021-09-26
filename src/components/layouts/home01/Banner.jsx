import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Banner extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <h1 className="text-center"> Banner Component</h1>
      </div>
    );
  }
}
