import React from 'react';
import PropTypes from 'prop-types';

const { object, func } = PropTypes;

export default class ModifierOverride extends React.Component {
  static propTypes = {
    modifier: object.isRequired,
    setMinimum: func.isRequired,
    setMaximum: func.isRequired,
    value: object.isRequired,
  }

  render() {
    return (
      <div>
        <label>{this.props.modifier.name} Minimum</label>
        <input
          onInput={this.setMinimum}
          value={this.props.value.minimum}
          type="number"
          min="-10"
          max="10"
        />
        <label>Maximum</label>
        <input
          onInput={this.setMaximum}
          value={this.props.value.maximum}
          type="number"
          min="-10"
          max="10"
        />
      </div>
    )
  }

  setMinimum = (event) => {
    this.props.setMinimum(this.props.modifier.id, parseInt(event.target.value));
  }

  setMaximum = (event) => {
    this.props.setMaximum(this.props.modifier.id, parseInt(event.target.value));
  }
}