import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import * as Tone from 'tone';
import './Keyboard.css';
import Key from './Key';
import {
  NOTES,
  VALID_KEYS,
  KEY_TO_NOTE,
} from '../keyMap';

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
// const now = Tone.now();

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
      recordedKeys: [],
      mouseIsDown: false,
    };
  }
  handleKeyDown = (e) => {
    console.log('FIND ME', e);
    if (!e.repeat) {
      let key = e.key;
      let newPressedKeys = [...this.state.pressedKeys];
      let newRecordedKeys = [...this.state.recordedKeys];
      if (!newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
        newPressedKeys.push(key);
        newRecordedKeys.push(key);
        this.setState({ pressedKeys: newPressedKeys });
        this.props.handleRecordKey(key);
        let keyNote = synth.triggerAttackRelease(KEY_TO_NOTE[key], '8n');
        this.props.handleRecordSound(keyNote);
      }
    }
  };

  handleKeyUp = (e) => {
    let key = e.key;
    let index = this.state.pressedKeys.indexOf(e.key);
    let newPressedKeys = [...this.state.pressedKeys];
    if (newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      newPressedKeys.splice(index, 1);
      this.setState({ pressedKeys: newPressedKeys });
    }
  };



  handleKeyClick = (e) => {
    let key = e.target.innerText.toLowerCase();
    if (VALID_KEYS.includes(key)) {
      console.log('is this valid?');
      // this.playNote(KEY_TO_NOTE[key]);
    }
  };

  playNote = (note) => {
    console.log('I NEED MOAR', note);
    synth.triggerAttackRelease(note, '8n');
    // this.handleRecordSound(note);
  };

  handleMouseDown = (e) => {
    this.setState({ mouseIsDown: true });
  };

  handleMouseOver = (e) => {
    if (this.state.mouseIsDown) {
      let key = e.target.innerText.toLowerCase();
      if (VALID_KEYS.includes(key)) {
        // this.playNote(KEY_TO_NOTE[key]);
        let keyNote = synth.triggerAttackRelease(KEY_TO_NOTE[key], '8n');
        this.props.handleRecordSound(keyNote);
      };
    }
  };

  handleMouseUp = (e) => {
    this.setState({ mouseIsDown: false });
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('mouseover', this.handleMouseOver);
  };

  render() {
    const keys = NOTES.map((note, idx) => {
      return (
        <Key key={idx} note={note} pressedKeys={this.state.pressedKeys} handleKeyClick={this.handleKeyClick} />
      );
    });

    return (
      <Grid>
        <Container className="controls">
          <div className="keyboard">
            {keys}
          </div>
        </Container>
      </Grid>
    );
  };
}
