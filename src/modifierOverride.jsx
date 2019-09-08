import React from 'react';
import PropTypes from 'prop-types';
import ModifierImage from './modifierImage';

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
      <div className="modifier-override-container">
        <div className="modifier-override-images">
          <ModifierImage id={this.props.modifier.id} direction="less" />
          <ModifierImage id={this.props.modifier.id} direction="more" />
        </div>
        <div className="modifier-override-slider">
          <div>Min</div>
          <input
            onInput={this.setMinimum}
            value={this.props.value.minimum}
            type="number"
            min="-10"
            max="10"
          />
          <div>Max</div>
          <input
            onInput={this.setMaximum}
            value={this.props.value.maximum}
            type="number"
            min="-10"
            max="10"
          />
        </div>
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
