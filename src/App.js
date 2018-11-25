import React, { Component } from 'react';
const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = {
    numOfSims: 1,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Sim Face Scrambler
          </p>
          <label for="tentacles">Number of Sims to make (1-10):</label>
          <input onInput={this.setNumOfSims} value={this.state.numOfSims} type="number" id="sims" name="sims" min="1" max="10"></input>
          <button onClick={this.scramble} disabled={this.isInvalid()}>Scramble!</button>
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

  isInvalid = () => {
    return this.state.numOfSims === ""
  }

  scramble = () => {
    ipcRenderer.send('start-scramble', this.state);
  }
}

export default App;
