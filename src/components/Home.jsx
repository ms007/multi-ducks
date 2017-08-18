import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ children }) =>
  <div>
    <h2 className="Home__Title">
      {children}
    </h2>
  </div>;

Home.propTypes = {
  children: PropTypes.node.isRequired
};

export default Home;
