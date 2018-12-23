import React, { Component } from 'react';
import { number } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './Image';
import { db } from '../services';

class Artists extends Component {
  static propTypes = { length: number };

  static defaultProps = { length: null }

  state = { artists: [] }

  componentDidMount = () => db.collection('artists').get().then((snapshot) => {
    const { length } = this.props;
    const artists = [];
    snapshot.forEach(doc => artists.push(doc.data()));
    this.setState({
      artists: artists
        .sort(() => Math.random() - Math.random()).slice(0, !length ? artists.length : length),
    });
  })

  render = () => {
    const { artists } = this.state;
    return (
      <section className="section static" style={{ padding: '5em 0', height: 'fit-content' }}>
        {artists.map(({ name }) => (
          <div className="cover" key={name}>
            <Link to={`artists/${name.toLowerCase().replace(' ', '')}`}>
              <Image className="cover-image" src={`artists/${name.toLowerCase().replace(' ', '')}/profile`} alt={name} />
              <h6 className="cover-text">{name}</h6>
            </Link>
          </div>
        ))}
      </section>
    );
  }
}

export default Artists;
