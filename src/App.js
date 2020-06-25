import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Main />
        </header>
      </div>
    </Provider>
  );
}

export default App;
