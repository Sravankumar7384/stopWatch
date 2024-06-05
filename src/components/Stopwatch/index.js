import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    isTimer:false,
    timeElapsedInSeconds:0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterver)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterver)
    this.setState({isTimer: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterver)
    this.setState({isTimer:0})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds:prevState.timeElapsedInSeconds+1,
    }))
  }

  onStartTimer = () => {
    this.timeInterver = setInterval(this.updateTime,1000)
    this.setState({isTimer:true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if(seconds  < 10){
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds/60)

    if(minutes < 10){
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimer} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="time">{time}</h1>
          <div className="buttons-container">
            <button className="start-button" type="button" onClick={this.onStartTimer} disabled = {isTimer}>
              Start
            </button>
            <button className="stop-button" type="button " onClick={this.onStopTimer}>
              Stop
            </button>
            <button className="pause-button" type="button" onClick = {this.onResetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
