import React from 'react';
import PropTypes from 'prop-types';

const { bool, func } = PropTypes;

export default class ScrambleButton extends React.Component {
  static propTypes = {
    scramble: func.isRequired,
    isValid: bool.isRequired,
  }

  render() {
    return (
      <div>
        <button onClick={this.props.scramble} disabled={this.props.isInvalid}>Scramble!</button>
      </div>
    )
  }
}
