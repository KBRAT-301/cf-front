import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class About extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: "url(/img/piano-background.jpg)" }}>
        <h2>About</h2>

        <div style={{
          display:'flex', 
          justifyContent: 'flex-start' }} >
          <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
          <p>about kyle</p>
        </div>

        <div style={{
          display:'flex', 
          justifyContent: 'flex-end' }}>
          <p>About Brandon</p>
          <img src="https://via.placeholder.com/150" alt="Brandon Grimes" />
        </div>

        <div style={{
          display:'flex', 
          justifyContent: 'flex-start' }}>
          <img src="https://via.placeholder.com/150" alt="Ryan Emmans" />
          <p>About Ryan</p>
        </div>

        <div style={{
          display:'flex', 
          justifyContent: 'flex-end'}}>
          <p>About Alex</p>
          <img src="https://via.placeholder.com/150" alt="Alex Grazda" />
        </div>
        
        <div style={{
          display:'flex', 
          justifyContent: 'flex-start' }}>
          <img src="https://via.placeholder.com/150" alt="Tray Chea" />
          <p>About Tray</p>
        </div>

      </div>
    );
  }
}

export default withAuth0(About);
