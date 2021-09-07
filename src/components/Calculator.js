import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <h2>Carbon Footprint Calculator</h2>
      </div>
    );
  }
}

export default withAuth0(Calculator);
