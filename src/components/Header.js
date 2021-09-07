import React from 'react';
import { Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Brand className="m-3">
            <h1>Carbon Footprint</h1>
          </Navbar.Brand>
          <NavItem className="navItem">
            <Link to="/" className="link">
              Home
            </Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/calculator" className="link">
              Calculator
            </Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/resources" className="link">
              Resources
            </Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/about" className="link">
              About
            </Link>
          </NavItem>
          <NavItem className="navItem">
            <Button size="lg" style={{ backgroundColor: '#a3c9a3', border: 'none' }}>
              LOG IN
            </Button>
          </NavItem>
        </Navbar>
      </header>
    );
  }
}

export default withAuth0(Header);
