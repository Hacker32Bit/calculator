import { React, Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Container from "./components/Container";
import "./index.css";

class App extends Component {
  state = {
    result: 0,
    input: "empty",
    isEqual: false,
  };

  onClickBtn = (symbol) => {
    const operators = ["+", "-", "/", "*"];

    console.log(symbol);
    switch (symbol) {
      // Operatos cases below
      case "C":
        this.setState({
          input: "empty",
        });
        break;
      case "<":
        this.setState({
          input:
            this.state.input.length < 2 || this.state.input === "empty"
              ? "empty"
              : this.state.input.slice(0, -1),
        });
        break;
      case "+":
        this.setState({
          input:
            this.state.input === "empty"
              ? "empty"
              : operators.includes(this.state.input.slice(-1))
              ? this.state.input
              : this.state.input + "+",
        });
        break;
      case "-":
        this.setState({
          input:
            this.state.input === "empty"
              ? "empty"
              : operators.includes(this.state.input.slice(-1))
              ? this.state.input
              : this.state.input + "-",
        });
        break;
      case "/":
        this.setState({
          input:
            this.state.input === "empty"
              ? "empty"
              : operators.includes(this.state.input.slice(-1))
              ? this.state.input
              : this.state.input + "/",
        });
        break;
      case "*":
        this.setState({
          input:
            this.state.input === "empty"
              ? "empty"
              : operators.includes(this.state.input.slice(-1))
              ? this.state.input
              : this.state.input + "*",
        });
        break;
      // Result case (not correct)
      case "=":
        this.setState({
          result: "Some result!"
        })

      // Point case (not correct)
      case ".":
        this.setState({
          input:
            this.state.input === "empty"
              ? "empty"
              : [".", ...operators].includes(this.state.input.slice(-1))
              ? this.state.input
              : this.state.input + ".",
        });
        break;

      // Numbers cases below
      case "0":
        this.setState({
          input:
            this.state.input === "empty" ? "empty" : this.state.input + "0",
        });
        break;
      case "1":
        this.setState({
          input: this.state.input === "empty" ? "1" : this.state.input + "1",
        });
        break;
      case "2":
        this.setState({
          input: this.state.input === "empty" ? "2" : this.state.input + "2",
        });
        break;
      case "3":
        this.setState({
          input: this.state.input === "empty" ? "3" : this.state.input + "3",
        });
        break;
      case "4":
        this.setState({
          input: this.state.input === "empty" ? "4" : this.state.input + "4",
        });
        break;
      case "5":
        this.setState({
          input: this.state.input === "empty" ? "5" : this.state.input + "5",
        });
        break;
      case "6":
        this.setState({
          input: this.state.input === "empty" ? "6" : this.state.input + "6",
        });
        break;
      case "7":
        this.setState({
          input: this.state.input === "empty" ? "7" : this.state.input + "7",
        });
        break;
      case "8":
        this.setState({
          input: this.state.input === "empty" ? "8" : this.state.input + "8",
        });
        break;
      case "9":
        this.setState({
          input: this.state.input === "empty" ? "9" : this.state.input + "9",
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="app">
        <Header result={this.state.result} input={this.state.input} />
        <Container onClickBtn={this.onClickBtn} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
