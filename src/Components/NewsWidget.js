import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Log from './Log';

const removeSource = (title) => {
  const n = title.lastIndexOf(' - ')
  return title.substr(0, n)
}

const NewsWidget = (props) => {
  const [stopTime, setStopTime] = useState(0)

  useEffect(() => {
    setStopTime(window.performance.now())
  }, [])

  return (
    <Card>
      <Card.Header>
        <React.Fragment>
          <h3>{props.category} News </h3>
          <Log startTime={props.startTime} stopTime={stopTime} widget={`news widget ${props.category}`} />
        </React.Fragment>
      </Card.Header>
      <Card.Body style={cardStyles}>
        <ListGroup variant="flush">
          {props.articles &&
            props.articles.map((article, index) => (
              <ListGroup.Item key={index + props.category}>
                <span>{article.source.name} | </span>
                <a href={article.url}>{removeSource(article.title)}</a>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

const cardStyles = {
  height: '500px',
  overflow: 'auto'
}

export default NewsWidget

        // <Card.Title>{props.category} News</Card.Title>
