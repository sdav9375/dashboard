import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Coworking(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Coworking space project</Card.Title>
        <Card.Text>
          I'm collecting data on coworking spaces around Miami.
          Contribute your data through my form here!
        </Card.Text>
        <form action="https://forms.gle/MXBxwc7fc7tANrpHA">
          <Button type="submit">Coworking form</Button>
        </form>
      </Card.Body>
    </Card>
  )
}

export default Coworking