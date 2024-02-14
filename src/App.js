// src/App.js
import React from 'react';
import InsuranceSwitcher from "./components/InsuranceSwitcher";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Insurance Container APP</h1>
        <InsuranceSwitcher clickBtn={this.clickBtn}/>
      </header>
    </div>
  );
}

export default App;
