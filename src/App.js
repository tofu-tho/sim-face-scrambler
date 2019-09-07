import React from 'react';
import ModifierOverride from './modifierOverride';

const { ipcRenderer } = window.require('electron');

const faceOverrides = [
  { name: 'Face Gaunt-Plump', id: 'faceGauntPlump' },
  { name: 'Cheek Size', id: 'cheekSize' },
  { name: 'Lower Face Width', id: 'lowerFaceWidth' },
  { name: 'Upper Face Width', id: 'upperFaceWidth' },
  { name: 'Underneck Up-Down', id: 'underneckUpDown' },
  { name: 'Cheekbone Fwd-Back', id: 'cheekboneFwdBack' },
  { name: 'Cheekbone Size', id: 'cheekboneSize' },
  { name: 'Cheekbone Up-Down', id: 'cheekboneUpDown' },
  { name: 'Ear Size', id: 'earSize' },
]

const browOverrides = [
  { name: 'Brow Thickness', id: 'browThickness' },
  { name: 'Brow Up-Down', id: 'browUpDown' },
  { name: 'Brow Arch', id: 'browArch' },
  { name: 'Brow Rotate', id: 'browRotate' },
  { name: 'Brow Orbit Shape', id: 'browOrbitShape' },
  { name: 'Forehead In-Out', id: 'foreheadInOut' },
  { name: 'Brow In-Out', id: 'browInOut' }
]

const eyeOverrides = [
  { name: 'Eye Size', id: 'eyeSize' },
  { name: 'Eye Width', id: 'eyeWidth' },
  { name: 'Outer Eye Down-Up', id: 'outerEyeDownUp' },
  { name: 'Eye Closeness', id: 'eyeCloseness' },
  { name: 'Eyes Up-Down', id: 'eyesUpDown' },
  { name: 'Eye Deepness', id: 'eyeDeepness' },
  { name: 'Eyelash Size', id: 'eyelashSize' },
  { name: 'Eyes Rotate', id: 'eyesRotate' },
]

const noseOverrides = [
  { name: 'Nose Size', id: 'noseSize' },
  { name: 'Nose Width', id: 'noseWidth' },
  { name: 'Nostril Width', id: 'nostrilWidth' },
  { name: 'Nose Length', id: 'noseLength' },
  { name: 'Nose Up-Down', id: 'noseUpDown' },
  { name: 'Nose Turned Up-Down', id: 'noseTurnedUpDown' },
  { name: 'Nose Tip Up-Down', id: 'noseTipUpDown' },
  { name: 'Nose Tip Turn', id: 'noseTipTurn' },
  { name: 'Bridge Curve', id: 'bridgeCurve' },
  { name: 'Bridge In-Out', id: 'bridgeInOut' },
  { name: 'Bridge Width', id: 'bridgeWidth' },
  { name: 'Nose In-Out', id: 'noseInOut' },
]

const mouthOverrides = [
  { name: 'Mouth Width', id: 'mouthWidth' },
  { name: 'Mouth Up-Down', id: 'mouthUpDown' },
  { name: 'Mouth Corner Down-Up', id: 'mouthCornerDownUp' },
  { name: 'Lips Thickness', id: 'lipsThickness' },
  { name: 'Upper Lip Pinch', id: 'upperLipPinch' },
  { name: 'Lower Lip Pinch', id: 'lowerLipPinch' },
  { name: 'Upper Lip Thickness', id: 'upperLipThickness' },
  { name: 'Lower Lip Thickness', id: 'lowerLipThickness' },
  { name: 'Mouth Corner Fwd-Back', id: 'mouthCornerFwdBack' },
  { name: 'Mouth In-Out', id: 'mouthInOut' },
]

const jawOverrides = [
  { name: 'Chin Up-Down', id: 'chinUpDown' },
  { name: 'Chin In-Out', id: 'chinInOut' },
  { name: 'Chin Point', id: 'chinPoint' },
  { name: 'Jaw In-Out', id: 'jawInOut' },
  { name: 'Jaw Square-Angled', id: 'jawSquareAngled' },
  { name: 'Jaw Width', id: 'jawWidth' },
  { name: 'Jaw Taper', id: 'jawTaper' },
]

const modifierTabs = [
  { id: 'face', name: 'Face', overrides: faceOverrides },
  { id: 'brow', name: 'Brow', overrides: browOverrides },
  { id: 'eyes', name: 'Eyes', overrides: eyeOverrides },
  { id: 'nose', name: 'Nose', overrides: noseOverrides },
  { id: 'mouth', name: 'Mouth', overrides: mouthOverrides },
  { id: 'jaw', name: 'Jaw', overrides: jawOverrides },
]

const makeModifierOverrideDefaults = () => {
  return modifierTabs
    .map((tab) => tab.overrides)
    .reduce((modifiers, acc) => [...acc, ...modifiers], [])
    .map((modifier) => {
      return {
        [modifier.id]: {
          minimum: -10,
          maximum: 10,
        }
      }
    })
    .reduce((modifier, acc) => {
      return { ...acc, ...modifier }
    }, {})
}

class App extends React.Component {
  state = {
    numOfSims: 1,
    femaleChance: 50,
    temperStrength: 33,
    modifierRangeMinimum: -10,
    modifierRangeMaximum: 10,
    modifierOverrides: makeModifierOverrideDefaults(),
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
            <label>Choose default modifier range (minimum):</label>
            <input onInput={this.setModifierRangeMinimum} value={this.state.modifierRangeMinimum} type="number" id="modifierRange" name="modifierRange" min="-10" max="10"></input>
          </div>
          <div>
            <label>Choose default modifier range (maximum):</label>
            <input onInput={this.setModifierRangeMaximum} value={this.state.modifierRangeMaximum} type="number" id="modifierRange" name="modifierRange" min="-10" max="10"></input>
          </div>
          <div>
            <label>Choose temper strength:</label>
            <input onInput={this.setTemperStrength} value={this.state.temperStrength} type="range" id="temperStrength" name="temperStrength" min="0" max="100"></input>
            <div>Temper strength: {this.getTemperStrength()}</div>
          </div>
          {this.renderModifierOverrides()}
          <div>
            <button onClick={this.scramble} disabled={this.isInvalid()}>Scramble!</button>
          </div>
        </header>
      </div>
    );
  }

  renderModifierOverrides = () => {
    const setMinimum = (id, value) => {
      this.setState({
        modifierOverrides: {
          ...this.state.modifierOverrides,
          [id]: {
            ...this.state.modifierOverrides[id],
            minimum: value,
          }
        }
      })
    }

    const setMaximum = (id, value) => {
      this.setState({
        modifierOverrides: {
          ...this.state.modifierOverrides,
          [id]: {
            ...this.state.modifierOverrides[id],
            maximum: value,
          }
        }
      })
    }

    return (
      modifierTabs.map((tab) => {
        const modifiers = tab.overrides;
        return modifiers.map((modifier) => {
          return (
            <ModifierOverride
              modifier={modifier}
              setMinimum={setMinimum}
              setMaximum={setMaximum}
              value={this.state.modifierOverrides[modifier.id]}
            />
          )
        })
      })
      
    )
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

  setModifierRangeMinimum = (event) => {
    if (event.target.value === "") {
      this.setState({
        modifierRangeMinimum: "",
      })
    }
    else if (parseInt(event.target.value) > 10) {
      this.setState({
        modifierRangeMinimum: 10,
      })
    }
    else if (parseInt(event.target.value) < -10) {
      this.setState({
        modifierRangeMinimum: -10,
      })
    }
    else {
      this.setState({
        modifierRangeMinimum: parseInt(event.target.value)
      })
    }
  }

  setModifierRangeMaximum = (event) => {
    if (event.target.value === "") {
      this.setState({
        modifierRangeMaximum: "",
      })
    }
    else if (parseInt(event.target.value) > 10) {
      this.setState({
        modifierRangeMaximum: 10,
      })
    }
    else if (parseInt(event.target.value) < -10) {
      this.setState({
        modifierRangeMaximum: -10,
      })
    }
    else {
      this.setState({
        modifierRangeMaximum: parseInt(event.target.value)
      })
    }
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
    if (this.state.numOfSims === "") {
      return true;
    }
    if (this.state.modifierRangeMinimum > this.state.modifierRangeMaximum) {
      return true;
    }
    return false;
  }

  scramble = () => {
    ipcRenderer.send('start-scramble', this.state);
  }
}

export default App;
