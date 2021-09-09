import React from 'react';
import { Container, Button, Icon, Form, Dropdown, Menu, TextArea } from 'semantic-ui-react';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container textAlign='center'>
        <Menu vertical style={{ margin: '-50px 0px 47px 52px', opacity: '90%', boxShadow: '0px 0px 5px black' }}>
          <Dropdown item text='Instruments'>
            <Dropdown.Menu>
              <Dropdown.Item>Piano</Dropdown.Item>
              <Dropdown.Item>Synthesizer</Dropdown.Item>
              <Dropdown.Item>Other Instrument</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Button className="recordButton" color='red' style={{ margin: '35px', boxShadow: '0px 0px 5px black' }} onClick={this.props.handleRecordKey}>
          <Icon name='circle' />Record</Button>
        <Button className="saveButton" color='blue' style={{ margin: '35px ', boxShadow: '0px 0px 5px black' }} onClick={this.props.handleSaveButton}>
          <Icon name='save' />Save</Button>
        <Button className="playButton" color='yellow' style={{ margin: '35px ', boxShadow: '0px 0px 5px black' }}>
          <Icon name='play' />Play</Button>
        <Button className="stopButton" color='green' style={{ margin: '35px', boxShadow: '0px 0px 5px black' }}>
          <Icon name='stop' />Stop</Button><br />
        <Form style={{ margin: '10px 0px -23px 0px' }}>
          <TextArea placeholder='Key input will go here.' style={{ backgroundColor: 'black', color: 'white', opacity: '70%', width: '55%', border: '1px solid gray' }} />
        </Form>
      </Container>
    );
  }
}
