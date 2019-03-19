import React, { Component } from 'react';
import {
  objectOf, oneOfType, string, number,
} from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './Image';
import { db } from '../services';

class Artists extends Component {
  static propTypes = { length: number, style: objectOf(oneOfType([string, number])) };

  static defaultProps = { length: null, style: {} }

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
    const { state: { artists }, props: { style } } = this;
    return (
      <section className="section static" style={{ padding: '5em 0', height: 'fit-content', ...style }}>
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
