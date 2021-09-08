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

    if (keyIsPressed) {
      keyClassName += ' pressed';
    }
    if (noteIsFlat) {
      keyClassName += ' flat';
      key = (
        <div onClick={this.props.handleKeyClick} className={keyClassName}>
          {NOTE_TO_KEY[this.props.note].toUpperCase()}
        </div>);
    } else {
      key = (
        <div onClick={this.props.handleKeyClick} className={keyClassName}>
          <div className='key-text'>{NOTE_TO_KEY[this.props.note].toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}
