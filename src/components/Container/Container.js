import { Component } from "react";

import "./container.css";
import Button from "../Button";

class Container extends Component {

  onClickBtn = (symbol) => {
    return this.props.onClickBtn(symbol);
  }

  render() {
    return (
      <div className="container">
        <Button type={"btn"} symbol={"C"} color={"#44bd32"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"<"} color={"#44bd32"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"/"} color={"#8c7ae6"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"*"} color={"#8c7ae6"} onClickBtn={ this.onClickBtn }/>

        <Button type={"btn"} symbol={"7"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"8"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"9"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"-"} color={"#8c7ae6"} onClickBtn={ this.onClickBtn }/>

        <Button type={"btn"} symbol={"4"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"5"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"6"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"+"} color={"#8c7ae6"} onClickBtn={ this.onClickBtn }/>

        <Button type={"btn"} symbol={"1"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"2"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button type={"btn"} symbol={"3"} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>

        <Button
          type={"btn btn-long-h btn-left"}
          symbol={"0"}
          color={"#f5f6fa"}
          onClickBtn={ this.onClickBtn }
        />
        <Button type={"btn"} symbol={"."} color={"#f5f6fa"} onClickBtn={ this.onClickBtn }/>
        <Button
          type={"btn btn-long-v btn-right"}
          symbol={"="}
          color={"#44bd32"}
          onClickBtn={ this.onClickBtn }
        />
      </div>
    );
  }
}

export default Container;
