import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import APOD from './Components/APOD';
import Bored from './Components/Bored';
import Cat from './Components/Cat';
import Chuck from './Components/Chuck';
import Clock from './Components/Clock';
import Coworking from './Components/Coworking';
import NewsContainer from './Components/NewsContainer';
import Quote from './Components/Quote';
import Weather from './Components/Weather';

const startTime = window.performance.now()

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Nav defaultActiveKey='/home' className='flex-column'>
            <Nav.Link href='/home'>Active</Nav.Link>
            <Nav.Link eventKey='link-1'>Link</Nav.Link>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
            <Nav.Link eventKey='disabled' disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Col>
        <Col className='border-right'>
          <Clock />
          <Weather startTime={startTime} />
          <Bored startTime={startTime} />
          <Quote startTime={startTime} />
          <APOD startTime={startTime} />
          <NewsContainer category='science' startTime={startTime} />
          <NewsContainer category='technology' startTime={startTime} />
          <Cat startTime={startTime} />
          <Chuck startTime={startTime} />
          <Coworking startTime={startTime} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
