import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Resources extends React.Component {
  render() {
    return (
      <div className="Resources">
        <h2>Resources</h2>
      </div>
    );
  }
}

export default withAuth0(Resources);
