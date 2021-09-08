import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'semantic-ui-react';

class About extends React.Component {

  render() {
    return (
      <>
        <div className="about">
          <div className="profile">
            <div className="profileImg">
              <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
            </div>
            <h5>Kyle Cohen</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
            <div>
              <Button circular color='linkedin' icon='linkedin'>
                  
              </Button>
            </div>
          </div>

          <div className="profile">
            <div className="profileImg">
              <img src="https://via.placeholder.com/150" alt="Brandon Rimes" />
            </div>
            <h5>Brandon Rimes</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
          </div>

          <div className="profile">
            <div className="profileImg">
              <img src="https://via.placeholder.com/150" alt="Ryan Emmans" />
            </div>
            <h5>Ryan Emmans</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
          </div>

          <div className="profile">
            <div className="profileImg">
              <img src="https://via.placeholder.com/150" alt="Alex Grazda" />
            </div>
            <h5>Alex Grazda</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
          </div>

          <div className="profile">
            <div className="profileImg">
              <img src="https://via.placeholder.com/150" alt="Tray Chea" />
            </div>
            <h5>Tray Chea</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth0(About);
