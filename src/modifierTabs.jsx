import React from 'react';
import PropTypes from 'prop-types';

import { modifierTabs } from './constants/modifiers';

const { func, string } = PropTypes;

export default class ModifierTabs extends React.Component {
  static propTypes = {
    handleSelectTab: func.isRequired,
    selectedTab: string.isRequired,
  }

  render() {
    return (
      <div className="modifier-tabs-container">
        {this.renderTabs()}
      </div>
    );
  }

  renderTabs = () => {
    return (
      modifierTabs.map((tab) => {
        const classes = this.props.selectedTab === tab.id ? 'modifier-tab selected' : 'modifier-tab';
        return <div className={classes} onClick={this.props.handleSelectTab.bind(this, tab)}>{tab.name}</div>;
      })
    );
  }
}
