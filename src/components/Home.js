import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Keyboard from './Keyboard';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h2>Enter Subtitle Here</h2>
        <img src="https://via.placeholder.com/600x400" alt="img" />
        <p>Keyboard will go here!</p>
        <Keyboard />
      </div>
    );
  }
}

export default withAuth0(Home);
