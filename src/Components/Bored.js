import axios from 'axios'
import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Log from "./Log"
 
const url = 'http://www.boredapi.com/api/activity/'

const Bored = (props) => {
  const [activity, setActivity] = useState('')

  const stopTime = Date.now()

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

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime} />
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
