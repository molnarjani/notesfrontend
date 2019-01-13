import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import NoteList from "./components/NoteList";
import NavBar from "./components/NavBar";
import store from "./store";
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar/>
          <Grid>
            <NoteList />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
