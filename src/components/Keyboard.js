import _ from 'lodash';
import React from 'react';
import './Keyboard.css';
import Key from './Key';
import {
  NOTES,
  // VALID_KEYS,
  // KEY_TO_NOTE,
} from '../keyMap';

export default class Keyboard extends React.Component {
  render() {
    const keys = _.map(NOTES, (note, idx) => {
      return (
        <Key key={idx} note={note} />
      );
    });

    return (
      <div className="keyboard">
        {keys}
      </div>
    );
  }
}
