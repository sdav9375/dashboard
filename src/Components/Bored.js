import axios from 'axios'
import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Log from "./Log"
 
const url = 'http://www.boredapi.com/api/activity/'

const Bored = (props) => {
  const [activity, setActivity] = useState('')
  const [stopTime, setStopTime] = useState(0)

  useEffect(() => {
    getActivity()
  }, [])

  const getActivity = () => {
    axios
      .get(url)
      .then(response => {
        setActivity(response.data.activity)
      })
  }

  useEffect(() => {
    setStopTime(window.performance.now())
  }, [])

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime} widget='bored' />
      </Card.Header>
      <Card.Body>
        <Card.Title>What should I do today?</Card.Title>
        <Card.Text>{activity}</Card.Text>
        <Button onClick={getActivity}>Get activity</Button>
      </Card.Body>
    </Card>
  )
}

export default Bored;
