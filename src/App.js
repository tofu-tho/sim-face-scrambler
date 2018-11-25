import React, { Component } from 'react';
const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = {
    numOfSims: 1,
    femaleChance: 50,
    temperStrength: 33,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Sim Face Scrambler
          </p>
          <div>
          <label>Number of Sims to make (1-10):</label>
          <input onInput={this.setNumOfSims} value={this.state.numOfSims} type="number" id="numOfSims" name="numOfSims" min="1" max="10"></input>
          </div>
          <div>
            <label>Choose gender chance:</label>
            <input onInput={this.setFemaleChance} value={this.state.femaleChance} type="range" id="femaleChance" name="femaleChance" min="0" max="100"></input>
            <div>Chance of female: {this.getFemaleChance()}</div>
            <div>Chance of male: {this.getMaleChance()}</div>
          </div>
          <div>
            <label>Choose temper strength:</label>
            <input onInput={this.setTemperStrength} value={this.state.temperStrength} type="range" id="temperStrength" name="temperStrength" min="0" max="100"></input>
            <div>Temper strength: {this.getTemperStrength()}</div>
          </div>
          <div>
            <button onClick={this.scramble} disabled={this.isInvalid()}>Scramble!</button>
          </div>
        </header>
      </div>
    );
  }

  setNumOfSims = (event) => {
    if (event.target.value === "") {
      this.setState({
        numOfSims: "",
      })
    }
    else if (parseInt(event.target.value) > 10) {
      this.setState({
        numOfSims: 10
      })
    }
    else {
      this.setState({
        numOfSims: parseInt(event.target.value)
      })
    }
  }

  setFemaleChance = (event) => {
    this.setState({
      femaleChance: parseInt(event.target.value)
    })
  }

  setTemperStrength = (event) => {
    this.setState({
      temperStrength: parseInt(event.target.value)
    })
  }

  getMaleChance = () => {
    return `${100 - this.state.femaleChance}%`;
  }

  getFemaleChance = () => {
    return `${this.state.femaleChance}%`;
  }

  getTemperStrength = () => {
    return `${this.state.temperStrength}%`;
  }

  isInvalid = () => {
    return this.state.numOfSims === ""
  }

  scramble = () => {
    ipcRenderer.send('start-scramble', this.state);
  }
}

export default App;
