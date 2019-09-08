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
      <div className="temper-strength-container">
        <div>Tempering strength:</div>
        <div className="temper-strength-label">0</div>
        <input
          onInput={this.props.setTemperStrength}
          value={this.props.temperStrength}
          type="range"
          min="0"
          max="100"
        />
        <div className="temper-strength-label">100</div>
        <div>
          Selected:
          {` ${this.getTemperStrength()}`}
        </div>
      </div>
    );
  }

  getTemperStrength = () => {
    return `${this.props.temperStrength}%`;
  }
}
