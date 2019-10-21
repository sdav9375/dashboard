import axios from 'axios';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Chuck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    }
  }

  componentDidMount() {
    this.getJoke()
  }

  getJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({
        joke: data.value,
      })
     })
  }
  
  render() {
    return (
      <Card>
      <Card.Body>
        <Card.Title>Chuck Norris facts</Card.Title>
        <Card.Text>
          {this.state.joke}
        </Card.Text>
          <Button onClick={this.getJoke}>Get fact</Button>
      </Card.Body>
    </Card>
    );
  }
}

export default Chuck;