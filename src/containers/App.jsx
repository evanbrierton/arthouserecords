import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { Navbar, Footer } from '../components';
import Main from './Main';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  </Router>
);

export default App;
