import { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {

    const { result, input } = this.props

    return (
      <div className="header">
        <h1>{result}</h1>
        <h3>{input}</h3>
      </div>
    );
  }
}

export default Header;
