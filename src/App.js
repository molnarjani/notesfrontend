import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import NoteList from "./components/NoteList";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NoteList />
        </div>
      </Provider>
    );
  }
}

export default App;
