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
        <Menu style={{ margin: '-50px 0px 18px 52px', width: '155px', opacity: '90%', boxShadow: '0px 0px 5px black' }}>
          <Dropdown item text='Instruments' style={{fontSize: '1.2rem', fontFamily: 'Ubuntu, sans-serif'}}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.props.handleInstrumentChange} id='piano'>Piano</Dropdown.Item>
              <Dropdown.Item onClick={this.props.handleInstrumentChange} id='synth'>Synthesizer</Dropdown.Item>
              <Dropdown.Item>More Coming Soon!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>

        <Button animated='fade' circular color='red' size='huge' alt='Record' style={{ margin: '35px', boxShadow: '0px 0px 10px black' }} onClick={this.props.handleRecordButton}>
          <Button.Content hidden>Record</Button.Content>
          <Button.Content visible>
            <Icon name='circle' />
          </Button.Content>
        </Button>

        <Button animated='fade' circular color='green' size='huge' style={{ margin: '35px ', boxShadow: '0px 0px 10px black' }}>
          <Button.Content hidden>Play</Button.Content>
          <Button.Content visible>
            <Icon name='play' />
          </Button.Content>
        </Button>

        <Button animated='fade' circular color='blue' size='huge' style={{ margin: '35px', boxShadow: '0px 0px 10px black' }}>
          <Button.Content hidden>Stop</Button.Content>
          <Button.Content visible>
            <Icon name='stop' />
          </Button.Content>
        </Button>

        <Button animated='fade' circular color='yellow' size='huge' style={{ margin: '35px ', boxShadow: '0px 0px 10px black' }} onClick={this.props.handleSaveButton}>
          <Button.Content hidden>Save</Button.Content>
          <Button.Content visible>
            <Icon name='save' />
          </Button.Content>
        </Button><br />

        <Form style={{ margin: '-6px 0px -23px 0px' }}>
          <TextArea value={this.props.recordedKeys} placeholder='Press record once to begin recording. Press again to stop recording.' style={{ fontSize: '1.3rem', fontFamily: 'Ubuntu, sans-serif', backgroundColor: 'black', color: 'white', opacity: '70%', width: '55%', border: '1px solid gray' }} />
        </Form>
      </Container>
    );
  }
}
