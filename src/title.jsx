import React from 'react';

import spatula from './assets/icon.png';

export default class Title extends React.Component {
  render() {
    return (
      <div className="title-container">
        <h1>
          <img src={spatula} />
          Sim Face Scrambler
          <img src={spatula} />
        </h1>
      </div>
    );
  }
}
