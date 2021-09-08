// import _ from 'lodash';
import React from 'react';
import './Key.css';
// import { NOTE_TO_KEY } from '../keyMap';

export default class Key extends React.Component {
  noteIsFlat = (note) => {
    return note.includes('fl');
  }

  render() {
    let keyClassName = 'key';
    const noteIsFlat = this.noteIsFlat(this.props.note);

    if (noteIsFlat) {
      keyClassName += ' flat';
    }
    let key;
    if (noteIsFlat) {
      key = <div className={keyClassName}></div>;
    } else {
      key = (
        <div className={keyClassName}>
          <div className="key-text">{this.props.note.toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}
