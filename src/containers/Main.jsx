import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { shape, string } from 'prop-types';

import {
  Home, Artists, Artist, Contact, News,
} from '../scenes';

class Main extends Component {
  static propTypes = { theme: shape({ backgroundColor: string, color: string }).isRequired }

  componentDidMount = () => window.scrollTo(0, 0);

  render = () => {
    const { theme } = this.props;
    return (
      <div style={theme}>
        <Switch>
          <Route exact path="/" render={() => <Home theme={theme} />} />
          <Route exact path="/artists" render={() => <Artists theme={theme} />} />
          <Route exact path="/artists/:artist" component={Artist} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/news" component={News} />
        </Switch>
      </div>
    );
  }
}

export default Main;
