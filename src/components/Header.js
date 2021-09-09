import React from 'react';
import { Image, Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import logo from '../img/logo.png';

class Header extends React.Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <header>
        <Segment inverted style={{ height: '100%' }}>
          <Menu inverted pointing secondary style={{ justifyContent: 'center', marginTop: '-15px' }}>
            <Menu.Item>
              {/* <h1 style={{ fontSize: '3rem', marginBottom: '-5px'}}>Keys!</h1> */}
              <Image src={logo} alt="keys logo" style={{ height: '70px' }} />
            </Menu.Item>
            <Menu.Item
              style={{ marginBottom: '15px' }}
              link
              className="navItem"
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              <Link to="/" style={{ textTransform: 'uppercase', fontWeight: 'bold' }} >
                <Icon name='music' />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ marginBottom: '15px' }}
              link
              className="navItem"
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}>
              <Link to="/profile" style={{
                fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: 'bold'
              }} >
                <Icon name='child' />
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ marginBottom: '15px' }}
              link
              className="navItem"
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}>
              <Link to="/about" style={{ fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                <Icon name='users' />
                About
              </Link>
            </Menu.Item>
            <Menu.Item style={{ marginBottom: '20px' }}>
              {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Menu.Item>
          </Menu>
        </Segment>
      </header >
    );
  }
}

export default withAuth0(Header);
