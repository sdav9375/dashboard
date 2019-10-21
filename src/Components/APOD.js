import axios from "axios";
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const APOD_API_KEY = 'u2mXrcwg0yhwBpJwETyDZQrxTZgOBLMFvYxVW07R'


const APODMedia = (props) => {
  if (props.type === 'video') {
    return (
      <iframe 
        src={props.url}
        frameBorder='0'
        allowFullScreen
        title={props.title}
      />)
  }
  else if (props.type === 'image') {
    return <Card.Img variant="top" src={props.url} />
  } 
  else {
    return null
  }
}


class APOD extends Component {

  constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        url: '',
        type: ''
      }
    }
  
  componentDidMount() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}`
    axios.get(url).then(response => response.data)
    .then((data) => {
      console.log(data)
      this.setState({
        title: data.title,
        description: data.explanation,
        url: data.url,
        type: data.media_type
      })
     })
     
  }

  render() {
    return (
      <Card>
        <APODMedia {...this.state} />
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Subtitle>NASA Astronomical Pic of the Day</Card.Subtitle>
          <Card.Text>
          {this.state.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default APOD;