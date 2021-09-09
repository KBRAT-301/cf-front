import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import * as Tone from 'tone';
import './Keyboard.css';
import Key from './Key';
import Controls from './Controls';
import {
  NOTES,
  VALID_KEYS,
  KEY_TO_NOTE,
  // NOTE_TO_KEY,
} from '../keyMap';

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
      mouseIsDown: false,
      isPiano: true,
    };
  }

  handleKeyDown = (e) => {
    if (!e.repeat) {
      let key = e.key;
      let newPressedKeys = [...this.state.pressedKeys];
      if (!newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
        newPressedKeys.push(key);
        this.setState({ pressedKeys: newPressedKeys });
        this.props.handleRecordKey(key);
        // synth.triggerAttackRelease(KEY_TO_NOTE[key], '8n');
        this.playNote(KEY_TO_NOTE[key]);
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
      // synth.triggerRelease(KEY_TO_NOTE[key], now);
    }
  };

  handleKeyClick = (e) => {
    let key = e.target.innerText.toLowerCase();
    if (VALID_KEYS.includes(key)) {
      this.playNote(KEY_TO_NOTE[key]);
    }
  };

  playNote = (note) => {
    if (this.state.isPiano) {
      console.log('isPiano!');
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    } else {
      synth.triggerAttackRelease(note, '8n');
    }
  };

  handleMouseDown = (e) => {
    this.setState({ mouseIsDown: true });
  };

  handleMouseOver = (e) => {
    if (this.state.mouseIsDown) {
      let key = e.target.innerText.toLowerCase();
      if (VALID_KEYS.includes(key)) {
        this.playNote(KEY_TO_NOTE[key]);
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

  handleInstrumentChange = () => {
    this.state.isPiano ? this.setState({ isPiano: false }) : this.setState({ isPiano: true });
  };

  render() {
    const keys = NOTES.map((note, idx) => {
      return (
        <Key key={idx} note={note} pressedKeys={this.state.pressedKeys} handleKeyClick={this.handleKeyClick} />
      );
    });

    const audioFiles = NOTES.map((note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../celloAudio/${note}.mp3`}
        />
      );
    });

    return (
      <Grid>
        <Container className="controlsImg">
          <Controls className="" handleSaveButton={this.props.handleSaveButton}
            handleInstrumentChange={this.handleInstrumentChange} />
          <div className="keyboard">
            {keys}
            {audioFiles}
          </div>
        </Container>
      </Grid>
    );
  };
}
