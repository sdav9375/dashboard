import axios from 'axios';
import React, { Component } from 'react';
import Card from "react-bootstrap/Card";

const API_KEY = "9ebf2d221b3ba304433ddd575dd51dd9"
const API_URL = "http://api.openweathermap.org/data/2.5/weather"

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      weather: []
    }
  }
  
  componentDidMount() {
    const url = `${API_URL}?q=Miami&units=imperial&appid=${API_KEY}`
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({
        temp: JSON.stringify(data.main.temp),
        weather: data.weather.map(item => item.description)
      })
     })
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Miami temperature: {this.state.temp} F</Card.Title>
            <Card.Text>Weather conditions</Card.Text>
            <ul>
              {this.state.weather &&
                this.state.weather.map((desc, index) => (
                  <li key={index + desc}>{desc}</li>
                ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Weather;

