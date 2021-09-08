import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>

        <div className="profile">
          <div>
            <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
          </div>
          <p>about kyle</p>
        </div>

        <div className="profile">
          <p>About Brandon</p>
          <div>
            <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
          </div>
          <p>About Ryan</p>
        </div>

        <div className="profile">
          <p>About Alex</p>
          <div>
            <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="https://via.placeholder.com/150" alt="Kyle Cohen" />
          </div>
          <p>About Tray</p>
        </div>
      </div>
    );
  }
}

export default withAuth0(About);
