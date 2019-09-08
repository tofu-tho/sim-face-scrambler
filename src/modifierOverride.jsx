import React from 'react';
import PropTypes from 'prop-types';

const {
  string, func, shape, number,
} = PropTypes;

const modifierShape = shape({
  name: string.isRequired,
  id: string.isRequired,
});

const valueShape = shape({
  minimum: number.isRequired,
  maximum: number.isRequired,
});

export default class ModifierOverride extends React.Component {
  static propTypes = {
    modifier: modifierShape.isRequired,
    setMinimum: func.isRequired,
    setMaximum: func.isRequired,
    value: valueShape.isRequired,
  }

  render() {
    return (
      <div>
        <label>
          {this.props.modifier.name}
          Minimum
        </label>
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
    );
  }

  setMinimum = (event) => {
    this.props.setMinimum(this.props.modifier.id, Number(event.target.value));
  }

  setMaximum = (event) => {
    this.props.setMaximum(this.props.modifier.id, Number(event.target.value));
  }
}
