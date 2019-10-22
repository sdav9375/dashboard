import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import APOD from './Components/APOD';
import Cat from './Components/Cat';
import Chuck from './Components/Chuck';
import Clock from './Components/Clock';
import Coworking from './Components/Coworking';
import NewsContainer from './Components/NewsContainer';
import Weather from './Components/Weather';


const startTime = Date.now()

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('startTime', startTime)
  }

  timeOfDay = (time) => {
    const hour = time.getHours()
    if (hour > 0 && hour < 12) {
        return "morning!"
      }
      else if (hour >= 12 && hour < 18) {
        return "afternoon!"
      }
      else {
        return "evening!"
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Clock />
            <Weather startTime={startTime} />
            <APOD startTime={startTime} />
          </Col>
          <Col className="border-right">
            <NewsContainer category="science" startTime={startTime} />
            <NewsContainer category="technology" startTime={startTime} />
          </Col>
          <Col>
            <Cat startTime={startTime} />
            <Chuck startTime={startTime} />
            <Coworking startTime={startTime} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
