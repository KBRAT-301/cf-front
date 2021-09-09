import React from 'react';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }


    class Recording extends React.Component {
      render() {
        return (
          <div className="recording">
            <Button size="lg" style={{ backgroundColor: 'deeppink', border: 'none' }} onClick={() => clearRecording ()}>
              Clear
            </Button>
          </div>
        );
      }
    }
   

export default Recording;