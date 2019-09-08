import React from 'react';
import ModifierOverride from './modifierOverride';
import QuantitySelector from './quantitySelector';
import GenderChanceSelector from './genderChanceSelector';
import TemperStrengthSelector from './temperStrengthSelector';
import DefaultModifierRangeSelector from './defaultModifierRangeSelector';
import ScrambleButton from './scrambleButton';

import { modifierTabs } from './constants/modifiers';

const { ipcRenderer } = window.require('electron');

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
          <div>
            Sim Face Scrambler
          </div>
          <QuantitySelector
            setNumOfSims={this.setNumOfSims}
            value={this.state.numOfSims}
          />
          <GenderChanceSelector
            setFemaleChance={this.setFemaleChance}
            femaleChance={this.state.femaleChance}
          />
          <DefaultModifierRangeSelector
            setModifierRangeMinimum={this.setModifierRangeMinimum}
            setModifierRangeMaximum={this.setModifierRangeMaximum}
            modifierRangeMinimum={this.state.modifierRangeMinimum}
            modifierRangeMaximum={this.state.modifierRangeMaximum}
          />
          <TemperStrengthSelector
            setTemperStrength={this.setTemperStrength}
            temperStrength={this.state.temperStrength}
          />
          {this.renderModifierOverrides()}
          <ScrambleButton
            scramble={this.scramble}
            disabled={this.isInvalid()}
          />
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
