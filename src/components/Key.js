import React from 'react';

import './Key.css';
import { NOTE_TO_KEY } from '../keyMap';

export default class Key extends React.Component {
  noteIsFlat = (note) => {
    return note.includes('fl');
  }

  keyIsPressed = (note, pressedKeys) => {
    return pressedKeys.includes(NOTE_TO_KEY[note]);
  }

  render() {
    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
    let key;
    let keyClassName = 'key';

    if (noteIsFlat) {
      keyClassName += ' flat';
    }
    if (keyIsPressed) {
      keyClassName += ' pressed';
    }
    if (noteIsFlat) {
      key = <div className={keyClassName}></div>;
    } else {
      key = (
        <div className={keyClassName}>
          <div className='key-text'>{this.props.note.toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}
