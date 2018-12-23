import React from 'react';
import LazyLoad from 'react-lazyload';

import { ArtistList, Image } from '../components';
import icons from '../assets';

const Home = () => {
  const { Facebook, Instagram, YouTube } = icons;
  return (
    <main style={{ padding: '0' }}>
      <div style={{
        position: 'fixed',
        flexGrow: 1,
        fontStyle: 'oblique',
        fontWeight: 300,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        textAlign: 'center',
        width: '100vw',
      }}
      >
        <h1 style={{ position: 'sticky', marginTop: '40vh' }}>ART HOUSE</h1>
      </div>
      <div className="wrapper">
        <Image parallax src="static/backgrounds/banner" alt="banner" className="above" style={{ backgroundColor: '#2c2c2c' }} />
        <section className="section static">
          {[Facebook, Instagram, YouTube].map((Icon, i) => (
            <Icon
              width={10}
              key={Icon}
              href={i < 2 ? 'arthouserecords' : 'UCy6sl7U9b_ktcxX0TH4Rhbw'}
            />
          ))}
        </section>
        <Image parallax src="static/recent/recent" alt="recent" />
        <LazyLoad height={500} offset={300}>
          <ArtistList length={2} />
        </LazyLoad>
        <Image parallax src="static/recent/recent2" alt="recent2" />
      </div>
    </main>
  );
};

export default Home;
