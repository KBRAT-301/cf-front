import React from 'react';
import { Button } from 'semantic-ui-react';
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

  handleSave = (e) => {
    console.log('NOTES?' ,e);
    e.preventDefault();
    const songs ={
      recordedKeys: this.state.recordedKeys,
      sound: this.state.sound,
    };
    this.props.handleSave(songs);
  }

  render() {
    return (
      <div className="home">
        <Button
          className="saveButton"
          color="pink"
          size="huge"
          style={{ width: '200px', marginBottom: '30px' }}
          onClick={this.handleSave}
        >
          Save Recording
        </Button>
        <Keyboard handleRecordSound={this.handleRecordSound} handleRecordKey={this.handleRecordKey} />
        {/* <Recording/> */}
      </div>
    );
  }
}

export default withAuth0(Home);
