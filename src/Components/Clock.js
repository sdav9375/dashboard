import React, { Component } from 'react';

class Clock extends Component {
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

  timeOfDay = time => {
    const hour = time.getHours()
    if (hour > 0 && hour < 12) {
      return "morning!"
    } else if (hour >= 12 && hour < 18) {
      return "afternoon!"
    } else {
      return "evening!"
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="">Good {this.timeOfDay(this.state.date)}</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </React.Fragment>
    )
  }
}

export default Clock;