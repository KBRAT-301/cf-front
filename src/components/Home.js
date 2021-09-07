import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <p>Home</p>
      </div>
    );
  }
}

export default withAuth0(Home);
