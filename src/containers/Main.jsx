import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home, Artists, Artist, Contact, News,
} from '../scenes';

class Main extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/artists/:artist" component={Artist} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default Main;
