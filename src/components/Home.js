import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Keyboard from './Keyboard';


class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Keyboard />
      </div>
    );
  }
}

export default withAuth0(Home);
