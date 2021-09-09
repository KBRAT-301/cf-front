import React from 'react';
import * as Tone from 'tone';
import './Keyboard.css';
import Key from './Key';
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
      recordedKeys: [],
      mouseIsDown: false,
    };
  }
  handleKeyDown = (e) => {
    if (!e.repeat) {
      // console.log(this.state.recordedKeys, this.state.pressedKeys);
      let key = e.key;
      let newPressedKeys = [...this.state.pressedKeys];
      let newRecordedKeys = [...this.state.recordedKeys];
      if (!newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
        newPressedKeys.push(key);
        newRecordedKeys.push(key);
        this.setState({ pressedKeys: newPressedKeys });
        // this.setState({ recordedKeys: newRecordedKeys });
        this.props.handleRecordKey(key);
        synth.triggerAttack(KEY_TO_NOTE[key], now);
        // this.playNote(KEY_TO_NOTE[key]);
      }
    }
  };


  
  // handleSavedNotes = () => {
  //   this.props.auth0.getIdTokenClaims().then(async res => {
  //     const jwt = res.__raw;

  //     const config = {
  //       headers: { Authorization: `Bearer ${jwt}` },
  //       baseURL: server_PORT,
  //       url: '/sound',
  //       params: { email: this.props.auth0.user.email },
  //       method: 'post'
  //     };

  //     const response = await axios(config);

  //     this.setState({ books: response.data });
  //   })
  //     .catch(err => console.error(err));
  // }


  
  handleKeyUp = (e) => {
    console.log(this.state.recordedKeys);
    let key = e.key;
    let index = this.state.pressedKeys.indexOf(e.key);
    let newPressedKeys = [...this.state.pressedKeys];
    // let newRecordedKeys = [...this.state.recordedKeys];
    if (newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      newPressedKeys.splice(index, 1);
      this.setState({ pressedKeys: newPressedKeys });
      // this.setState({ recordedKeys: newRecordedKeys });
      synth.triggerRelease(KEY_TO_NOTE[key], now);
    }
  };



  handleKeyClick = (e) => {
    let key = e.target.innerText.toLowerCase();
    if(VALID_KEYS.includes(key)) {
      this.playNote(KEY_TO_NOTE[key]);
    }
  };

  playNote = (note) => {
    synth.triggerAttackRelease(note, '8n');
    // const noteAudio = new Audio(document.getElementById(note).src);
    // noteAudio.play();
  };

  handleMouseDown = (e) => {
    this.setState({ mouseIsDown: true });
  };

  handleMouseOver = (e) => {
    if(this.state.mouseIsDown) {
      let key = e.target.innerText.toLowerCase();
      if(VALID_KEYS.includes(key)) {
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

  render() {
    const keys = NOTES.map((note, idx) => {
      return (
        <Key key={idx} note={note} pressedKeys={this.state.pressedKeys} handleKeyClick={this.handleKeyClick}/>
      );
    });

    // const audioFiles = NOTES.map((note, index) => {
    //   return (
    //     <audio
    //       id={note}
    //       key={index}
    //       src={`../../celloAudio/${note}.mp3`}
    //     />
    //   );
    // });

    return (
      <div className="keyboard">
        {keys}
        {/* {audioFiles} */}
      </div>
    );
  };
}
