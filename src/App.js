import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (<div className="App">
    <Header /> 
    <Board />
   </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"))

export default App;
