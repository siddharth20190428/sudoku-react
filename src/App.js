import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import InputPanel from "./components/InputPanel";

function App() {
  return (<div className="App">
    <hr />
    <Header /> 
    <Board />
    <InputPanel />
   </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"))

export default App;
