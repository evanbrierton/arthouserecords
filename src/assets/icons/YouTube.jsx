import React from 'react';
import { string, number } from 'prop-types';

import Icon from './Icon';

const YouTube = ({
  fill, width, hoverFill, href,
}) => (
  <Icon href={`https://www.youtube.com/channel/${href}`} className="Youtube" fill={fill} hoverFill={hoverFill} width={width} title="YouTube" path="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
);

YouTube.propTypes = {
  fill: string, hoverFill: string, width: number, href: string.isRequired,
};
YouTube.defaultProps = { fill: '#fff', hoverFill: '#ff0000', width: 5 };

export default YouTube;
