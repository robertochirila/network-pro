import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AddTaskForm} from './components/AddTaskForm'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <AddTaskForm/>
      </header>
    </div>
  );
}

export default App;
