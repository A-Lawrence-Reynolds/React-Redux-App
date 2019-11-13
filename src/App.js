import React from "react";
import "./App.css";
import JokeList from "./components/JokeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/chuck.png" alt="pixilated chuck norris holding guns " />
        <JokeList />
      </header>
    </div>
  );
}

export default App;
