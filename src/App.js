import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import APOD from './Components/APOD';
import Chuck from './Components/Chuck';
import Coworking from './Components/Coworking';
import Weather from './Components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
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
          <Col className="border-right">
            <h1 className="">Good {this.timeOfDay(this.state.date)}</h1>
          </Col>
          <Col>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            <Chuck />
            <Coworking />
            <Weather />
            <APOD />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
