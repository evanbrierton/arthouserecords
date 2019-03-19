import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { shape, string } from 'prop-types';
import icons from '../assets';
import { db, storage } from '../services';
import { Image } from '../components';

class Artist extends Component {
  static propTypes = {
    location: shape({
      hash: string, pathname: string, key: string, search: string,
    }).isRequired,
  }

  state = {
    name: '',
    images: {},
    urls: {
      applemusic: '',
      spotify: '',
      deezer: '',
      youtube: '',
    },
    bio: '',
    applemusichover: false,
  }

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { location: { pathname } } = this.props;
    const id = pathname.split('/')[2];
    await db.collection('artists').doc(id).get()
      .then(doc => this.setState({ ...doc.data() }));

    ['cover', 'profile'].forEach(url => storage.child(`artists/${id}/${url}.jpg`).getDownloadURL()
      .then((image) => {
        const { images } = this.state;
        this.setState({ images: { ...images, [url]: image } });
      }));
  }

  render = () => {
    const {
      state: {
        name, urls: {
          applemusic, spotify, deezer, youtube, twitter, instagram, facebook,
        }, bio, applemusichover,
      }, props: { location: { pathname } },
    } = this;
    const {
      AppleMusic, Deezer, Spotify, YouTube, Instagram, Facebook, Twitter,
    } = icons;
    const id = pathname.split('/')[2];
    const social = [twitter, instagram, facebook];

    return (
      <main>
        <section className="artist">
          <Image
            src={`artists/${id}/profile`}
            className="heavy-shadow"
            alt="profile"
            style={{
              width: '25vw',
              height: '25vw',
              minWidth: '300px',
              minHeight: '300px',
              marginRight: '2em',
              flexShrink: 0,
            }}
          />
          <div style={{ flexShrink: 1 }}>
            <h3>{name}</h3>
            <p style={{ width: '50vw' }}>{bio}</p>
          </div>
        </section>
        <section className="section static">
          <div
            onMouseEnter={() => this.setState({ applemusichover: true })}
            onMouseLeave={() => this.setState({ applemusichover: false })}
            onFocus={() => this.setState({ applemusichover: true })}
            onBlur={() => this.setState({ applemusichover: false })}
          >
            <Image
              src="static/icons/applemusicgradient"
              alt="applemusic"
              style={{
                width: '7em',
                position: 'absolute',
                opacity: applemusichover ? 1 : 0,
                pointerEvents: 'none',
              }}
            />
            <AppleMusic href={applemusic} width={7} />
          </div>
          <Spotify href={spotify} width={7} />
          <Deezer href={deezer} width={7} />
          <YouTube href={youtube} width={7} />
        </section>
        <section className="section parallax">
          <Image src={`artists/${id}/cover`} alt="cover" style={{ width: '100%' }} parallax />
        </section>
        <section className="section static" style={{ padding: '5em 0', height: 'fit-content' }}>
          {
            [Twitter, Instagram, Facebook].map((Item, i) => (
              social[i] ? <Item href={social[i]} width={5} key={Item} /> : null
            ))
          }
        </section>
      </main>
    );
  }
}

export default withRouter(Artist);
