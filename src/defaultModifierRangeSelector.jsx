import React from 'react';
import PropTypes from 'prop-types';

const { func, number } = PropTypes;

export default class DefaultModifierRangeSelector extends React.Component {
  static propTypes = {
    setModifierRangeMinimum: func.isRequired,
    setModifierRangeMaximum: func.isRequired,
    modifierRangeMinimum: number.isRequired,
    modifierRangeMaximum: number.isRequired,
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Choose default modifier range (minimum):</label>
          <input
            onInput={this.props.setModifierRangeMinimum}
            value={this.props.modifierRangeMinimum}
            type="number"
            min="-10"
            max="10"
          />
        </div>
        <div>
          <label>Choose default modifier range (maximum):</label>
          <input
            onInput={this.props.setModifierRangeMaximum}
            value={this.props.modifierRangeMaximum}
            type="number"
            min="-10"
            max="10"
          />
        </div>
      </React.Fragment>
    )
  }
}
