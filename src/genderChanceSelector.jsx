import React from 'react';
import PropTypes from 'prop-types';

const { func, number } = PropTypes;

export default class GenderChanceSelector extends React.Component {
  static propTypes = {
    setFemaleChance: func.isRequired,
    femaleChance: number.isRequired,
  }

  render() {
    return (
      <div>
        <label>Choose gender chance:</label>
        <input
          onInput={this.props.setFemaleChance}
          value={this.props.femaleChance}
          type="range"
          min="0"
          max="100"
        />
        <div>Chance of female: {this.props.femaleChance}</div>
        <div>Chance of male: {this.getMaleChance()}</div>
      </div>
    )
  }

  getMaleChance = () => {
    return `${100 - this.props.femaleChance}%`;
  }
}
