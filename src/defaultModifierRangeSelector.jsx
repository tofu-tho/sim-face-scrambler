import React from 'react';
import PropTypes from 'prop-types';

const { func, number } = PropTypes;

export default class DefaultModifierRangeSelector extends React.Component {
  static propTypes = {
    setDefaultModifierRangeMinimum: func.isRequired,
    setDefaultModifierRangeMaximum: func.isRequired,
    defaultModifierRangeMinimum: number.isRequired,
    defaultModifierRangeMaximum: number.isRequired,
  }

  render() {
    return (
      <>
        <div>
          <label>Choose default modifier range (minimum):</label>
          <input
            onInput={this.props.setDefaultModifierRangeMinimum}
            value={this.props.defaultModifierRangeMinimum}
            type="number"
            min="-10"
            max="10"
          />
        </div>
        <div>
          <label>Choose default modifier range (maximum):</label>
          <input
            onInput={this.props.setDefaultModifierRangeMaximum}
            value={this.props.defaultModifierRangeMaximum}
            type="number"
            min="-10"
            max="10"
          />
        </div>
      </>
    );
  }
}
