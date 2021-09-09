import React from 'react';
// import { Button } from 'semantic-ui-react';
import { withAuth0 } from '@auth0/auth0-react';
import Keyboard from './Keyboard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordedKeys: [],
      sound: [],
    };
  }

  handleRecordKey = (key) => {
    let newRecordedKeys = [...this.state.recordedKeys];
    newRecordedKeys.push(key);
    this.setState({ recordedKeys: newRecordedKeys });
    console.log('handleRecordKey', key);
    console.log('recordedKeys', this.state.recordedKeys);
  };

  handleRecordSound = (sound) => {
    let newRecordedSound = [...this.state.sound];
    newRecordedSound.push(sound);
    this.setState({ sound: newRecordedSound});
  }

  handleSave = async () => {
    console.log('toBeSaved', this.state.recordedKeys);
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'post',
        baseURL: process.env.REACT_APP_API,
        url: '/sound',
        data: {song: this.state.recordedKeys},
        params: { email: this.props.auth0.user.email },
      };
      try {
        const response = await axios(config);
        const newSound = response.data;
        const sound = [...this.state.sound, newSound];
        this.setState({ sound });
        // this.setState({ recordedKeys: [] });
        this.clearRecording();
        console.log('saved!');
      } catch (error) {
        res.status(404).send(error);
      }
    }).catch(error => console.error(error));
  };

  clearRecording = () => {
    this.setState({ recordedKeys: [] });
  };

  render() {
    return (
      <div className="home">
        {/* <Button className="saveButton" color='pink' size='huge' style={{ width: '200px', marginBottom: '30px' }} onClick={this.handleSave}>Save Recording</Button> */}
        <Keyboard handleRecordKey={this.handleRecordKey}
          handleSaveButton={this.handleSave}
          recordedKeys={this.state.recordedKeys}/>
        {/* <Recording/> */}
      </div>
    );
  }
}

export default withAuth0(Home);
