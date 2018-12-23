import React from 'react';

import { ArtistList } from '../components';

const Artists = () => (
  <main>
    <h2 style={{ borderBottom: '8px solid #b71c1c' }}>Artists</h2>
    <ArtistList shadow={false} />
  </main>
);

export default Artists;
