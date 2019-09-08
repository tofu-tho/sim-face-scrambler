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
      <div className="section-container">
        <div>Female</div>
        <div>{`${this.props.femaleChance}%`}</div>
        <input
          onInput={this.props.setFemaleChance}
          value={this.props.femaleChance}
          type="range"
          min="0"
          max="100"
        />
        <div>Male</div>
        <div>{this.getMaleChance()}</div>
      </div>
    );
  }

  getMaleChance = () => {
    return `${100 - this.props.femaleChance}%`;
  }
}
