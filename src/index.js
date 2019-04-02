import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>CodeSandbox X Netlify</h2>
      <h3>Deploying Static Sites to Netlify from CodeSandbox.</h3>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
