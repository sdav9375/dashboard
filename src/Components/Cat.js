import axios from 'axios';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const catBaseUrl = 'https://api.thecatapi.com/v1/images/search?order=RANDOM'

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    this.getCat()
  }

  getCat = () => {
    const url = `${catBaseUrl}&x-api-key=${process.env.REACT_APP_CAT_API_KEY}`
    axios
      .get(url)
      .then(response => response.data[0])
      .then(data => {
        this.setState({
          url: data.url
        })
      })
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.state.url} />
        <Card.Body>
          <Button onClick={this.getCat}>Random cat</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Cat;