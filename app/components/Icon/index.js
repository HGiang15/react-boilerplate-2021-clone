import React from 'react';
import PropTypes from 'prop-types';
import IconStyle from './IconStyle';

const Icon = props => (
  <IconStyle type="image/svg+xml" data={props.src} {...props}>
    .
  </IconStyle>
);

Icon.propTypes = {
  src: PropTypes.string,
};

export default Icon;
