import React from 'react';
import PropTypes from 'prop-types';

const { number, func } = PropTypes;

export default class quantitySelector extends React.Component {
  static propTypes = {
    numOfSims: number.isRequired,
    setNumOfSims: func.isRequired,
  }

  render() {
    return (
      <div className="section-container">
        <div>Generate</div>
        <div className="quantity-selector">
          <input
            onInput={this.props.setNumOfSims}
            value={this.props.numOfSims}
            type="number"
            min="1"
            max="10"
          />
        </div>
        <div>Sims</div>
      </div>
    );
  }
}
