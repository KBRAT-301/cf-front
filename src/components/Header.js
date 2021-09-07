import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Carbon Footprint</h1>
        <Link to="/">
          Home
        </Link>
        <Link to="/calculator">
          Calculator
        </Link>
        <Link to="/resources">
          Resources
        </Link>
        <Link to="/about">
          About
        </Link>
        <button>
          Log In
        </button>
      </>
    );
  }
}

export default withAuth0(Header);
