import React from 'react';
import PropTypes from 'prop-types';

const { func, number } = PropTypes;

export default class TemperStrengthSelector extends React.Component {
  static propTypes = {
    setTemperStrength: func.isRequired,
    temperStrength: number.isRequired,
  }

  render() {
    return (
      <div>
        <label>Choose temper strength:</label>
        <input
          onInput={this.props.setTemperStrength}
          value={this.props.temperStrength}
          type="range"
          min="0"
          max="100"
        />
        <div>Temper strength: {this.getTemperStrength()}</div>
      </div>
    )
  }

  getTemperStrength = () => {
    return `${this.props.temperStrength}%`;
  }
}
