import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Log from './Log';

const catBaseUrl = 'https://api.thecatapi.com/v1/images/search?order=RANDOM'

const Cat = (props) => {
  const [image, setImage] = useState('')
  
  const url = `${catBaseUrl}&x-api-key=${process.env.REACT_APP_CAT_API_KEY}`

  const stopTime = Date.now()
  
  useEffect(() => {
    getCat()
  }, [])

  const getCat = () => {
    axios
      .get(url)
      .then(response => response.data[0])
      .then(data => {
        setImage(data.url)
      })
  }

  return (
    <Card>
      <Card.Header>
        <Log startTime={props.startTime} stopTime={stopTime} />
      </Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Button onClick={getCat}>Random cat</Button>
      </Card.Body>
    </Card>
  )
}

export default Cat;