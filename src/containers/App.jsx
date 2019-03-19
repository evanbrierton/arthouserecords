import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { Navbar, Footer } from '../components';
import Main from './Main';

class App extends Component {
  state = { theme: { backgroundColor: '#2c2c2c', color: 'white' } }

  setLightTheme = () => this.setState({ theme: { backgroundColor: 'white', color: '#2c2c2c', fill: '#2c2c2c' } })

  setDarkTheme = () => this.setState({ theme: { backgroundColor: '#2c2c2c', color: 'white', fill: 'white' } })

  render = () => {
    const { state: { theme }, setLightTheme, setDarkTheme } = this;
    return (
      <Router>
        <div className="App">
          <Navbar theme={theme} setLightTheme={setLightTheme} setDarkTheme={setDarkTheme} />
          <Main theme={theme} />
          <Footer theme={theme} />
        </div>
      </Router>
    );
  }
}

export default App;
