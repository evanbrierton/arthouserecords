import React, { Component } from 'react';

import { ArtistList } from '../components';

class Artists extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render = () => (
    <main>
      <h2 style={{ borderBottom: '8px solid #b71c1c' }}>Artists</h2>
      <ArtistList shadow={false} />
    </main>
  );
}

export default Artists;
