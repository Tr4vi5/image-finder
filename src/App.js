import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Search from './components/Search/Search.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
