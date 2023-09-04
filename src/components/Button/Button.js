import { Component } from "react";

import "./button.css";

class Button extends Component {
  
  render() {
    const { type, symbol, color } = this.props;
    return (
      <button style={{ color }} className={type}>
        {symbol}
      </button>
    );
  }
}

export default Button;
