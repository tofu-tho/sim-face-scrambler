import React from 'react';
import PropTypes from 'prop-types';

import faceGauntPlumpLess from './assets/face/faceGauntPlumpLess.png';
import faceGauntPlumpMore from './assets/face/faceGauntPlumpMore.png';

import faceShortLongLess from './assets/face/faceShortLongLess.png';
import faceShortLongMore from './assets/face/faceShortLongMore.png';

import cheekSizeLess from './assets/face/cheekSizeLess.png';
import cheekSizeMore from './assets/face/cheekSizeMore.png';

import lowerFaceWidthLess from './assets/face/lowerFaceWidthLess.png';
import lowerFaceWidthMore from './assets/face/lowerFaceWidthMore.png';

import upperFaceWidthLess from './assets/face/upperFaceWidthLess.png';
import upperFaceWidthMore from './assets/face/upperFaceWidthMore.png';

import underneckUpDownLess from './assets/face/underneckUpDownLess.png';
import underneckUpDownMore from './assets/face/underneckUpDownMore.png';

import cheekboneFwdBackLess from './assets/face/cheekboneFwdBackLess.png';
import cheekboneFwdBackMore from './assets/face/cheekboneFwdBackMore.png';

import cheekboneSizeLess from './assets/face/cheekboneSizeLess.png';
import cheekboneSizeMore from './assets/face/cheekboneSizeMore.png';

import cheekboneUpDownLess from './assets/face/cheekboneUpDownLess.png';
import cheekboneUpDownMore from './assets/face/cheekboneUpDownMore.png';

import earSizeLess from './assets/face/earSizeLess.png';
import earSizeMore from './assets/face/earSizeMore.png';

const { string } = PropTypes;

export default class ModifierImage extends React.Component {
  static propTypes = {
    id: string.isRequired,
    direction: string.isRequired,
  }

  render() {
    return (
      <img src={this.getImage()} />
    );
  }

  getImage = () => {
    if (this.props.id === 'faceGauntPlump') {
      return this.props.direction === 'less' ? faceGauntPlumpLess : faceGauntPlumpMore;
    }
    if (this.props.id === 'faceShortLong') {
      return this.props.direction === 'less' ? faceShortLongLess : faceShortLongMore;
    }
    if (this.props.id === 'cheekSize') {
      return this.props.direction === 'less' ? cheekSizeLess : cheekSizeMore;
    }
    if (this.props.id === 'lowerFaceWidth') {
      return this.props.direction === 'less' ? lowerFaceWidthLess : lowerFaceWidthMore;
    }
    if (this.props.id === 'upperFaceWidth') {
      return this.props.direction === 'less' ? upperFaceWidthLess : upperFaceWidthMore;
    }
    if (this.props.id === 'underneckUpDown') {
      return this.props.direction === 'less' ? underneckUpDownLess : underneckUpDownMore;
    }
    if (this.props.id === 'cheekboneFwdBack') {
      return this.props.direction === 'less' ? cheekboneFwdBackLess : cheekboneFwdBackMore;
    }
    if (this.props.id === 'cheekboneSize') {
      return this.props.direction === 'less' ? cheekboneSizeLess : cheekboneSizeMore;
    }
    if (this.props.id === 'cheekboneUpDown') {
      return this.props.direction === 'less' ? cheekboneUpDownLess : cheekboneUpDownMore;
    }
    if (this.props.id === 'earSize') {
      return this.props.direction === 'less' ? earSizeLess : earSizeMore;
    }
    return null;
  }
}
