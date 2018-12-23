import React from 'react';
import { string, number } from 'prop-types';

import Icon from './Icon';

const Facebook = ({
  fill, width, hoverFill, href,
}) => (
  <Icon href={`https://www.facebook.com/${href}`} fill={fill} hoverFill={hoverFill} width={width} title="Facebook" path="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
);

Facebook.propTypes = {
  fill: string, hoverFill: string, width: number, href: string.isRequired,
};
Facebook.defaultProps = { fill: '#fff', hoverFill: '#3B5998', width: 5 };

export default Facebook;
