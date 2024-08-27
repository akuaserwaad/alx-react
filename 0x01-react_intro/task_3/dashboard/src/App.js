import React from "react";
import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy, } from "./utils";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">
          Email: <input type="email" name="password" id="email" />
        </label>
        <label htmlFor="password">
          Password: <input type="password" name="password" id="password" />
        </label>
        <button>Okay</button>
      </div>
      <div className="App-footer">3
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
