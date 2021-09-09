import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Keyboard from './Keyboard';
import axios from 'axios';
// import Recording from './recording';




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordedKeys: [],
      sound: []
    };
  }

  handleRecordKey = (key) => {
    let newRecordedKeys = [...this.state.recordedKeys];
    newRecordedKeys.push(key);
    this.setState({ recordedKeys: newRecordedKeys });
  }
  handleSave = async (toBeSaved) => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'post',
        baseURL: process.env.REACT_APP_API,
        url: '/sound',
        data: toBeSaved,
        params: { email: this.props.auth0.user.email },
      };
      try {
        const response = await axios(config);
        const newSound = response.data;
        const sound = [...this.state.sound, newSound];
        this.setState({ sound });
      } catch (error) {
        res.status(404).send(error);
      }
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <div className="home">
        <Keyboard handleRecordKey={this.handleRecordKey}/>
        <button onClick={this.handleSave(this.state.recordedKeys)}>Save Recording</button>
        {/* <Recording/> */}
      </div>
    );
  }
}

export default withAuth0(Home);
