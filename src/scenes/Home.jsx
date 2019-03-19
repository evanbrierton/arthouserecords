import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { shape, string } from 'prop-types';

import { ArtistList, Image } from '../components';
import icons from '../assets';

class Home extends Component {
  static propTypes = { theme: shape({ backgroundColor: string, color: string }).isRequired };

  componentDidMount = () => window.scrollTo(0, 0)

  render = () => {
    const { Facebook, Instagram, YouTube } = icons;
    const { theme: { backgroundColor, color } } = this.props;
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
          <section className="section static" style={{ backgroundColor }}>
            {[Facebook, Instagram, YouTube].map((Icon, i) => (
              <Icon
                width={10}
                key={Icon}
                href={i < 2 ? 'arthouserecords' : 'UCy6sl7U9b_ktcxX0TH4Rhbw'}
                fill={color}
              />
            ))}
          </section>
          <Image parallax src="static/recent/recent" alt="recent" />
          <LazyLoad height={1080} offset={300}>
            <ArtistList length={2} style={{ backgroundColor, color }} />
          </LazyLoad>
          <Image parallax src="static/recent/recent2" alt="recent2" />
        </div>
      </main>
    );
  };
}

export default Home;
