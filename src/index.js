import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from "./component1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
