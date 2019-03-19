import React, { Component } from 'react';
import {
  string, bool, objectOf, oneOfType, number,
} from 'prop-types';

import { db } from '../services';

class Image extends Component {
  state = {
    source: '',
    currentSrc: '',
  }

  componentDidMount = () => {
    const { src, parallax, alt } = this.props;
    db.doc(`assets/${src}`).get().then(doc => (
      this.setState({
        source: Object.values(doc.data()).reduce((acc, next, i) => (
          `${acc}${next} ${Object.keys(doc.data())[i]}, `)),
      })
    ));

    const updateSrc = () => {
      if (parallax && document.querySelector(`#${alt}`) && document.querySelector(`#${alt}`).currentSrc) {
        this.setState({ currentSrc: document.querySelector(`#${alt}`).currentSrc });
      } else setTimeout(updateSrc, 100);
    };

    updateSrc();
  }

  render = () => {
    const {
      state: { source, currentSrc }, props: {
        parallax, className, style, alt,
      },
    } = this;
    return parallax
      ? (
        <section className={`section parallax ${className}`} style={{ backgroundImage: `url(${currentSrc})`, ...style }}>
          <img srcSet={source} style={{ display: 'none', ...style }} className={className} id={alt} alt={alt} />
        </section>
      )
      : <img srcSet={source} style={style} className={className} alt={alt} />;
  }
}

Image.propTypes = {
  src: string.isRequired,
  className: string,
  style: objectOf(oneOfType([string, number])),
  parallax: bool,
  alt: string.isRequired,
};

Image.defaultProps = { parallax: false, className: '', style: {} };

export default Image;
