import React from 'react';
import ModifierOverride from './modifierOverride';
import QuantitySelector from './quantitySelector';
import GenderChanceSelector from './genderChanceSelector';
import TemperStrengthSelector from './temperStrengthSelector';
import DefaultModifierRangeSelector from './defaultModifierRangeSelector';
import ScrambleButton from './scrambleButton';
import Title from './title';

import { modifierTabs } from './constants/modifiers';

const { ipcRenderer } = window.require('electron');

const makeModifierOverrideDefaults = () => {
  return modifierTabs
    .map((tab) => {
      return tab.overrides;
    })
    .reduce((modifiers, acc) => {
      return [...acc, ...modifiers];
    }, [])
    .map((modifier) => {
      return {
        [modifier.id]: {
          minimum: -10,
          maximum: 10,
        },
      };
    })
    .reduce((modifier, acc) => {
      return { ...acc, ...modifier };
    }, {});
};

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
          <Title />
          <QuantitySelector
            setNumOfSims={this.setNumOfSims}
            numOfSims={this.state.numOfSims}
          />
          <GenderChanceSelector
            setFemaleChance={this.setFemaleChance}
            femaleChance={this.state.femaleChance}
          />
          <ScrambleButton
            scramble={this.scramble}
            disabled={this.isInvalid()}
          />
          <TemperStrengthSelector
            setTemperStrength={this.setTemperStrength}
            temperStrength={this.state.temperStrength}
          />
          <DefaultModifierRangeSelector
            setModifierRangeMinimum={this.setModifierRangeMinimum}
            setModifierRangeMaximum={this.setModifierRangeMaximum}
            modifierRangeMinimum={this.state.modifierRangeMinimum}
            modifierRangeMaximum={this.state.modifierRangeMaximum}
          />
          <div className="modifier-overrides-container">
            {this.renderModifierOverrides()}
          </div>
        </header>
      </div>
    );
  }

  renderModifierOverrides = () => {
    const setMinimum = (id, value) => {
      this.setState((prevState) => {
        return {
          modifierOverrides: {
            ...prevState.modifierOverrides,
            [id]: {
              ...prevState.modifierOverrides[id],
              minimum: value,
            },
          },
        };
      });
    };

    const setMaximum = (id, value) => {
      this.setState((prevState) => {
        return {
          modifierOverrides: {
            ...prevState.modifierOverrides,
            [id]: {
              ...prevState.modifierOverrides[id],
              maximum: value,
            },
          },
        };
      });
    };

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
          );
        });
      })
    );
  }

  setNumOfSims = (event) => {
    if (event.target.value === '') {
      this.setState({
        numOfSims: '',
      });
    } else if (Number(event.target.value) > 10) {
      this.setState({
        numOfSims: 10,
      });
    } else {
      this.setState({
        numOfSims: Number(event.target.value),
      });
    }
  }

  setFemaleChance = (event) => {
    this.setState({
      femaleChance: Number(event.target.value),
    });
  }

  setModifierRangeMinimum = (event) => {
    if (event.target.value === '') {
      this.setState({
        modifierRangeMinimum: '',
      });
    } else if (Number(event.target.value) > 10) {
      this.setState({
        modifierRangeMinimum: 10,
      });
    } else if (Number(event.target.value) < -10) {
      this.setState({
        modifierRangeMinimum: -10,
      });
    } else {
      this.setState({
        modifierRangeMinimum: Number(event.target.value),
      });
    }
  }

  setModifierRangeMaximum = (event) => {
    if (event.target.value === '') {
      this.setState({
        modifierRangeMaximum: '',
      });
    } else if (Number(event.target.value) > 10) {
      this.setState({
        modifierRangeMaximum: 10,
      });
    } else if (Number(event.target.value) < -10) {
      this.setState({
        modifierRangeMaximum: -10,
      });
    } else {
      this.setState({
        modifierRangeMaximum: Number(event.target.value),
      });
    }
  }

  setTemperStrength = (event) => {
    this.setState({
      temperStrength: Number(event.target.value),
    });
  }

  isInvalid = () => {
    if (this.state.numOfSims === '') {
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
