import React from 'react';

const Log = (props) => {
  console.log(props)
  return (
    <span>Render time: {props.stopTime - props.startTime} milliseconds</span>
  );
  }

export default Log
