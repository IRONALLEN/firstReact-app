import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <htmlFor action="/process" method="post">
      <div className="form-group">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do</h2>
        <ul className="list-group">
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
        <label htmlFor="complete">Complete:</label>
        <input type="checkbox" id="Complete" />
      </div>
    </htmlFor>
  );
}
export default App;
