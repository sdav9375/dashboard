import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Log from './Log';

const apodBaseUrl = 'https://api.nasa.gov/planetary/apod'

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

const APOD = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [type, setType] = useState('')
  
  const apiUrl = `${apodBaseUrl}?api_key=${process.env.REACT_APP_APOD_API_KEY}`

  const stopTime = Date.now()

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => response.data)
      .then((data) => {
        setTitle(data.title)
        setDescription(data.explanation)
        setUrl(data.url)
        setType(data.media_type)
      })
  }, [apiUrl])

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime}/>
      </Card.Header>
      <APODMedia 
        title={title} 
        description={description}
        url={url}
        type={type} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>NASA Astronomical Pic of the Day</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default APOD;