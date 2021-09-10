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
} from '../keyMap';

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
      mouseIsDown: false,
      instrument: 'piano',
      isRecording: false,
    };
  }

  handleKeyDown = (e) => {
    if (!e.repeat) {
      let key = e.key;
      let newPressedKeys = [...this.state.pressedKeys];
      if (!newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
        newPressedKeys.push(key);
        this.setState({ pressedKeys: newPressedKeys });
        this.playNote(KEY_TO_NOTE[key]);
        if(this.state.isRecording) {
          this.props.handleRecordKey(key);
        }
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
      this.playNote(KEY_TO_NOTE[key]);
      if(this.state.isRecording) {
        this.props.handleRecordKey(key);
      }
    }
  };

  playNote = (note) => {
    switch(this.state.instrument) {
    case 'piano':
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
      break;
    case 'synth':
      synth.triggerAttackRelease(note, '4n');
      break;
    default:
      synth.triggerAttackRelease(note, '4n');
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
        if(this.state.isRecording) {
          this.props.handleRecordKey(key);
        }
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

  handleInstrumentChange = (e) => {
    this.setState({ instrument: e.target.id });
  };

  handleRecording = () => {
    console.log('handleRecording');
    this.state.isRecording ? this.setState({ isRecording: false }) : this.setState({ isRecording: true });
  }

  handlePlayBack = async () => {
    console.log('handlePlayBack');
    // await Tone.start();
    this.props.recordedKeys.forEach((key, i) => {
      synth.triggerAttackRelease(KEY_TO_NOTE[key], '4n', now + i/3);
    });
  }

  handleStopPlayBack = () => {
    this.props.recordedKeys.forEach((key) => {
      synth.triggerRelease(KEY_TO_NOTE[key], now);
    });
  }

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
          <Controls className="" handleClearButton={this.props.handleClearButton}
            handleInstrumentChange={this.handleInstrumentChange}
            handleRecordButton={this.handleRecording}
            recordedKeys={this.props.recordedKeys}
            handlePlayBackButton={this.handlePlayBack}
            isRecording={this.state.isRecording}
            handleStopPlayBack={this.handleStopPlayBack}/>
          <div className="keyboard">
            {keys}
            {audioFiles}
          </div>
        </Container>
      </Grid>
    );
  };
}
