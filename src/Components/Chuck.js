import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Log from './Log';

const url = 'https://api.chucknorris.io/jokes/random'

const Chuck =(props) => {
  const [joke, setJoke] = useState('')
  const [stopTime, setStopTime] = useState(0)

  useEffect(() => {
    getJoke()
  }, [])

  const getJoke = () => {
    axios
      .get(url)
      .then(response => response.data)
      .then((data) => {
        setJoke(data.value)
      })
  }

  useEffect(() => {
    setStopTime(window.performance.now())
  }, []);

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime} widget='chuck'/>
      </Card.Header>
      <Card.Body>
        <Card.Title>Chuck Norris facts</Card.Title>
        <Card.Text>{joke}</Card.Text>
        <Button onClick={getJoke}>Get fact</Button>
      </Card.Body>
    </Card>
  )
}

export default Chuck;