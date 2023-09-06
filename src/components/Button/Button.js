import { Component } from "react";

import "./button.css";

class Button extends Component {
  
  onClickBtn = (symbol) => {
    return this.props.onClickBtn(symbol);
  }

  render() {
    const { type, symbol, color } = this.props;
    return (
      <button onClick={() => this.onClickBtn(symbol)} style={{ color }} className={type}>
        {symbol}
      </button>
    );
  }
}

export default Button;
