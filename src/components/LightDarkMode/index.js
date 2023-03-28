// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  shiftModes = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const buttonText = mode ? 'Dark Mode' : 'Light Mode'
    const modeClassName = mode ? 'light-mode' : 'dark-mode'
    return (
      <div className="main-container">
        <div className={`${modeClassName} container`}>
          <h1 className="main-heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.shiftModes}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
