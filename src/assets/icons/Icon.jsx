import React, { Component } from 'react';
import { string, number } from 'prop-types';

class Icon extends Component {
  static propTypes = {
    width: number.isRequired,
    fill: string.isRequired,
    hoverFill: string.isRequired,
    title: string.isRequired,
    path: string.isRequired,
    href: string.isRequired,
  };

  state = { colour: '#fff' }

  componentDidMount = () => {
    const { fill } = this.props;
    this.setState({ colour: fill });
  }

  render = () => {
    const {
      props: {
        fill, hoverFill, width, title, path, href,
      }, state: { colour },
    } = this;
    return (
      <a
        onMouseEnter={() => this.setState({ colour: hoverFill })}
        onFocus={() => this.setState({ colour: hoverFill })}
        onMouseLeave={() => this.setState({ colour: fill })}
        onBlur={() => this.setState({ colour: fill })}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="Icon"
      >
        <svg
          style={{ cursor: 'pointer', fill: colour }}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={`${width}em`}
          fill={fill}
        >
          <title>{title}</title>
          <path d={path} />
        </svg>
        <span className="hidden">{title}</span>
      </a>
    );
  }
}

export default Icon;
