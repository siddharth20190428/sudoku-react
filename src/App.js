import React from "react";
import "./App.css";
// import Board from "./components/Board";
import SudokuBoard from "./components/SudokuBoard";
import Header from "./components/Header";
import InputPanel from "./components/InputPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="game">
        <SudokuBoard />
        <InputPanel />
      </div>
    </div>
  );
}

export default App;
