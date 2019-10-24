import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Log from './Log';

const weatherBaseUrl = 'http://api.openweathermap.org/data/2.5/weather'
const url = `${weatherBaseUrl}?q=Miami&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

const Weather = (props) => {
  const [temp, setTemp] = useState('')
  const [weather, setWeather] = useState([]);
  const [stopTime, setStopTime] = useState(0)

  useEffect(() => {
    getWeather()
    setStopTime(window.performance.now())
  }, []);

  const getWeather = () => {
     axios.get(url).then(response => response.data)
    .then((data) => {
      setTemp(JSON.stringify(data.main.temp))
      setWeather(data.weather.map(item => item.description))
     })
  }

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime} widget='weather'/>
      </Card.Header>
      <Card.Body>
        <Card.Title>Miami temperature: {temp} F</Card.Title>
        <Card.Text>Weather conditions</Card.Text>
        <ul>
          {weather &&
            weather.map((desc, index) => <li key={index + desc}>{desc}</li>)}
        </ul>
      </Card.Body>
    </Card>
  )
}

export default Weather


