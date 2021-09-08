import React from 'react';

import './Keyboard.css';
import Key from './Key';
import {
  NOTES,
  VALID_KEYS,
  KEY_TO_NOTE,
} from '../keyMap';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
    };
  }
  handleKeyDown = (e) => {
    if (!e.repeat) {
      let key = e.key;
      let newPressedKeys = [...this.state.pressedKeys];
      if (!newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
        newPressedKeys.push(key);
      }
      this.setState({ pressedKeys: newPressedKeys });
      this.playNote(KEY_TO_NOTE[key]);
    }
  };

  handleKeyUp = (e) => {
    let key = e.key;
    let index = this.state.pressedKeys.indexOf(e.key);
    let newPressedKeys = [...this.state.pressedKeys];
    if (newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      newPressedKeys.splice(index, 1);
    }
    this.setState({ pressedKeys: newPressedKeys });
  };

  playNote = (note) => {
    // if (!note.isEmpty()) {
    //   const noteAudio = new Audio(document.getElementById(note).src);
    //   noteAudio.play();
    // }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  };

  render() {
    const keys = NOTES.map((note, idx) => {
      return (
        <Key key={idx} note={note} pressedKeys={this.state.pressedKeys}/>
      );
    });

    return (
      <div className="keyboard">
        {keys}
      </div>
    );
  };
}
