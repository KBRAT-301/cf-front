import React from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

class Header extends React.Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <header>
        <Segment inverted style={{ height: '100%' }}>
          <Menu inverted pointing secondary style={{ justifyContent: 'center', marginTop: '-20px' }}>
            <Menu.Item>
              <h1 style={{ fontSize: '3rem' }}>Keys!</h1>
            </Menu.Item>
            <Menu.Item
              link
              className="navItem"
              name='home'
              size='big'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              <Link to="/" style={{ textTransform: 'uppercase', fontWeight: 'bold' }} >
                <Icon name='music' />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item
              link
              className="navItem"
              name='profile'
              size='big'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}>
              <Link to="/profile" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                <Icon name='child' />
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item
              link
              className="navItem"
              name='about'
              size='big'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}>
              <Link to="/about" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                <Icon name='users' />
                About
              </Link>
            </Menu.Item>
            <Menu.Item>
              {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Menu.Item>
          </Menu>
        </Segment>
      </header>
    );
  }
}

export default withAuth0(Header);
