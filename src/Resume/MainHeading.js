import React, { PropTypes } from 'react';

const MainHeading = ({ title }) => (
  <h1 style={style.main}>{title.toUpperCase()}</h1>
);

const style = {
  main: {
    padding: '0.25rem 0.25rem 1.25rem 0.25rem',
    color: 'rgb(5, 24, 56)',
  },
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeading;
