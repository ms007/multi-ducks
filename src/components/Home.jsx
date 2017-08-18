import React, { PropTypes } from 'react';

const Home = ({ children }) =>
  (<div>
    <h2>
      {children}
    </h2>
  </div>);

Home.propTypes = {
  children: PropTypes.element.isRequired
};

export default Home;
