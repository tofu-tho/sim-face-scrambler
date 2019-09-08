import React from 'react';
import PropTypes from 'prop-types';

const { number, func} = PropTypes;

export default class quantitySelector extends React.Component {
  static propTypes = {
    value: number.isRequired,
    setNumOfSims: func.isRequired,
  }

  render() {
    return (
      <div>
        <label>Number of Sims to make (1-10):</label>
        <input onInput={this.setNumOfSims} value={this.props.numOfSims} type="number" min="1" max="10"></input>
      </div>
    )
  }
}
