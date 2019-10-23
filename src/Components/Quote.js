import axios from "axios"
import React, { Component } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Log from "./Log"

class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote = () => {
    const url = "https://quote-garden.herokuapp.com/quotes/random"
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data.quoteText,
          author: data.quoteAuthor
        })
      })
  }

  render() {
    const stopTime = Date.now()
    return (
      <Card>
        <Card.Header>
          <Log startTime={this.props.startTime} stopTime={stopTime} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Random Quote</Card.Title>
          <Card.Text>
            <span style={quoteStyles}>{this.state.quote}</span>
            <span style={authorStyles}>- {this.state.author}</span>
          </Card.Text>
          <Button onClick={this.getQuote}>Get quote</Button>
        </Card.Body>
      </Card>
    )
  }
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