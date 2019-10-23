import React from 'react';
import ReactAudioPlayer from "react-audio-player";
import Card from 'react-bootstrap/Card';

function Audio(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Ahaha</Card.Title>
          <ReactAudioPlayer src="../../ahaha.mp3" autoPlay controls />
      </Card.Body>
    </Card>
  )
}

export default Audio