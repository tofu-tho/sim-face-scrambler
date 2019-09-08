import React from 'react';
import PropTypes from 'prop-types';

const { bool, func } = PropTypes;

export default class ScrambleButton extends React.Component {
  static propTypes = {
    scramble: func.isRequired,
    disabled: bool.isRequired,
  }

  render() {
    return (
      <div className="section-container">
        <button
          onClick={this.props.scramble}
          disabled={this.props.disabled}
          type="submit"
        >
          Scramble!
        </button>
      </div>
    );
  }
}
