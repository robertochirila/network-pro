import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Tasks from "./components/Tasks";
import { Navigation } from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <AddTaskForm />
          <Tasks />
        </header>
      </div>
    </Provider>
  );
}

export default App;
