import React from 'react';
import { Button } from 'semantic-ui-react';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <>
        <Button className="saveButton" color='pink' size='huge' style={{ width: '200px', marginBottom: '30px' }} onClick={this.props.handleSaveButton}>Save Recording</Button>
        <Button className="instrumentButton" color='pink' size='huge' style={{ width: '200px', marginBottom: '30px' }} onClick={this.props.handleInstrumentChange}>Synth/Piano</Button>
      </>
    );
  }
}
