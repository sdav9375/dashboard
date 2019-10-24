import React from 'react';

const Log = (props) => {
  console.log(`---------------LOG ${props.widget}-------------`)
  return (
    <span>First render: {parseInt(props.stopTime - props.startTime)} milliseconds</span>
  );
  }

export default React.memo(Log)
