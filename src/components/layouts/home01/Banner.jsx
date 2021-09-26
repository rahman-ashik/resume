import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <h1 className="text-center"> Banner Component</h1>
      </div>
    );
  }
}

export default Banner;
