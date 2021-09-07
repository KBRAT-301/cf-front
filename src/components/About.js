import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <p>About</p>
      </div>
    );
  }
}

export default withAuth0(About);
