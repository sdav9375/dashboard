import axios from "axios"
import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Log from "./Log"

const url = "https://quote-garden.herokuapp.com/quotes/random"

const Quote = (props) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [stopTime, setStopTime] = useState(0)

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        setQuote(data.quoteText)
        setAuthor(data.quoteAuthor)
      })
  }

  useEffect(() => {
    setStopTime(window.performance.now())
  }, [])

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime} widget='quote' />
      </Card.Header>
      <Card.Body>
        <Card.Title>Random Quote</Card.Title>
        <Card.Text>
          <span style={quoteStyles}>{quote}</span>
          <span style={authorStyles}>- {author}</span>
        </Card.Text>
        <Button onClick={getQuote}>Get quote</Button>
      </Card.Body>
    </Card>
  )
}

const quoteStyles = {
  display: 'inline-block',
  fontStyle: 'italic',
  marginBottom: '5px'
}

const authorStyles = {
  display: 'inline-block',
  marginLeft: '40%'
}

export default Quote;