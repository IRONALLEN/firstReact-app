import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Goodbye from './components/Goodbye';

function App() {
  return (
    <htmlFor action='/process' method='post'>
      <div className='form-group'>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do</h2>
        <ul className='list-group'>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
          <li>Learn how to COmmit to hit hub </li>
        </ul>
        <Goodbye />
        <Greet />
        <label htmlFor='complete'>Complete:</label>
        <input type='checkbox' id='Complete' />
      </div>
    </htmlFor>
  );
}
export default App;
