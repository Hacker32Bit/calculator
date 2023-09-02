import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import "./index.css";

const App = () => {

  return (
    <div className="app">
      <Header />
      <Container />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
