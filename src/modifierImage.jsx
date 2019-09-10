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

import browThicknessLess from './assets/brow/browThicknessLess.png';
import browThicknessMore from './assets/brow/browThicknessMore.png';
import browUpDownLess from './assets/brow/browUpDownLess.png';
import browUpDownMore from './assets/brow/browUpDownMore.png';
import browArchLess from './assets/brow/browArchLess.png';
import browArchMore from './assets/brow/browArchMore.png';
import browRotateLess from './assets/brow/browRotateLess.png';
import browRotateMore from './assets/brow/browRotateMore.png';
import browOrbitShapeLess from './assets/brow/browOrbitShapeLess.png';
import browOrbitShapeMore from './assets/brow/browOrbitShapeMore.png';
import foreheadInOutLess from './assets/brow/foreheadInOutLess.png';
import foreheadInOutMore from './assets/brow/foreheadInOutMore.png';
import browInOutLess from './assets/brow/browInOutLess.png';
import browInOutMore from './assets/brow/browInOutMore.png';

import eyeSizeLess from './assets/eyes/eyeSizeLess.png';
import eyeSizeMore from './assets/eyes/eyeSizeMore.png';
import eyeWidthLess from './assets/eyes/eyeWidthLess.png';
import eyeWidthMore from './assets/eyes/eyeWidthMore.png';
import outerEyeDownUpLess from './assets/eyes/outerEyeDownUpLess.png';
import outerEyeDownUpMore from './assets/eyes/outerEyeDownUpMore.png';
import eyeClosenessLess from './assets/eyes/eyeClosenessLess.png';
import eyeClosenessMore from './assets/eyes/eyeClosenessMore.png';
import eyesUpDownLess from './assets/eyes/eyesUpDownLess.png';
import eyesUpDownMore from './assets/eyes/eyesUpDownMore.png';
import orbitUpDownLess from './assets/eyes/orbitUpDownLess.png';
import orbitUpDownMore from './assets/eyes/orbitUpDownMore.png';
import eyeDeepnessLess from './assets/eyes/eyeDeepnessLess.png';
import eyeDeepnessMore from './assets/eyes/eyeDeepnessMore.png';
import eyeSquintLess from './assets/eyes/eyeSquintLess.png';
import eyeSquintMore from './assets/eyes/eyeSquintMore.png';
import eyelashSizeLess from './assets/eyes/eyelashSizeLess.png';
import eyelashSizeMore from './assets/eyes/eyelashSizeMore.png';
import eyesRotateLess from './assets/eyes/eyesRotateLess.png';
import eyesRotateMore from './assets/eyes/eyesRotateMore.png';

import noseSizeLess from './assets/nose/noseSizeLess.png';
import noseSizeMore from './assets/nose/noseSizeMore.png';
import noseWidthLess from './assets/nose/noseWidthLess.png';
import noseWidthMore from './assets/nose/noseWidthMore.png';
import nostrilWidthLess from './assets/nose/nostrilWidthLess.png';
import nostrilWidthMore from './assets/nose/nostrilWidthMore.png';
import noseLengthLess from './assets/nose/noseLengthLess.png';
import noseLengthMore from './assets/nose/noseLengthMore.png';
import noseUpDownLess from './assets/nose/noseUpDownLess.png';
import noseUpDownMore from './assets/nose/noseUpDownMore.png';
import noseTurnedUpDownLess from './assets/nose/noseTurnedUpDownLess.png';
import noseTurnedUpDownMore from './assets/nose/noseTurnedUpDownMore.png';
import noseTipUpDownLess from './assets/nose/noseTipUpDownLess.png';
import noseTipUpDownMore from './assets/nose/noseTipUpDownMore.png';
import noseTipTurnLess from './assets/nose/noseTipTurnLess.png';
import noseTipTurnMore from './assets/nose/noseTipTurnMore.png';
import bridgeCurveLess from './assets/nose/bridgeCurveLess.png';
import bridgeCurveMore from './assets/nose/bridgeCurveMore.png';
import bridgeInOutLess from './assets/nose/bridgeInOutLess.png';
import bridgeInOutMore from './assets/nose/bridgeInOutMore.png';
import bridgeWidthLess from './assets/nose/bridgeWidthLess.png';
import bridgeWidthMore from './assets/nose/bridgeWidthMore.png';
import noseInOutLess from './assets/nose/noseInOutLess.png';
import noseInOutMore from './assets/nose/noseInOutMore.png';

import mouthWidthLess from './assets/mouth/mouthWidthLess.png';
import mouthWidthMore from './assets/mouth/mouthWidthMore.png';
import mouthUpDownLess from './assets/mouth/mouthUpDownLess.png';
import mouthUpDownMore from './assets/mouth/mouthUpDownMore.png';
import mouthCornerDownUpLess from './assets/mouth/mouthCornerDownUpLess.png';
import mouthCornerDownUpMore from './assets/mouth/mouthCornerDownUpMore.png';
import lipsThicknessLess from './assets/mouth/lipsThicknessLess.png';
import lipsThicknessMore from './assets/mouth/lipsThicknessMore.png';
import upperLipPinchLess from './assets/mouth/upperLipPinchLess.png';
import upperLipPinchMore from './assets/mouth/upperLipPinchMore.png';
import lowerLipPinchLess from './assets/mouth/lowerLipPinchLess.png';
import lowerLipPinchMore from './assets/mouth/lowerLipPinchMore.png';
import upperLipThicknessLess from './assets/mouth/upperLipThicknessLess.png';
import upperLipThicknessMore from './assets/mouth/upperLipThicknessMore.png';
import lowerLipThicknessLess from './assets/mouth/lowerLipThicknessLess.png';
import lowerLipThicknessMore from './assets/mouth/lowerLipThicknessMore.png';
import mouthCornerFwdBackLess from './assets/mouth/mouthCornerFwdBackLess.png';
import mouthCornerFwdBackMore from './assets/mouth/mouthCornerFwdBackMore.png';
import mouthInOutLess from './assets/mouth/mouthInOutLess.png';
import mouthInOutMore from './assets/mouth/mouthInOutMore.png';

import chinUpDownLess from './assets/jaw/chinUpDownLess.png';
import chinUpDownMore from './assets/jaw/chinUpDownMore.png';
import chinInOutLess from './assets/jaw/chinInOutLess.png';
import chinInOutMore from './assets/jaw/chinInOutMore.png';
import chinPointLess from './assets/jaw/chinPointLess.png';
import chinPointMore from './assets/jaw/chinPointMore.png';
import jawInOutLess from './assets/jaw/jawInOutLess.png';
import jawInOutMore from './assets/jaw/jawInOutMore.png';
import jawSquareAngledLess from './assets/jaw/jawSquareAngledLess.png';
import jawSquareAngledMore from './assets/jaw/jawSquareAngledMore.png';
import jawWidthLess from './assets/jaw/jawWidthLess.png';
import jawWidthMore from './assets/jaw/jawWidthMore.png';
import jawTaperLess from './assets/jaw/jawTaperLess.png';
import jawTaperMore from './assets/jaw/jawTaperMore.png';


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

    if (this.props.id === 'browThickness') {
      return this.props.direction === 'less' ? browThicknessLess : browThicknessMore;
    }
    if (this.props.id === 'browUpDown') {
      return this.props.direction === 'less' ? browUpDownLess : browUpDownMore;
    }
    if (this.props.id === 'browArch') {
      return this.props.direction === 'less' ? browArchLess : browArchMore;
    }
    if (this.props.id === 'browRotate') {
      return this.props.direction === 'less' ? browRotateLess : browRotateMore;
    }
    if (this.props.id === 'browOrbitShape') {
      return this.props.direction === 'less' ? browOrbitShapeLess : browOrbitShapeMore;
    }
    if (this.props.id === 'foreheadInOut') {
      return this.props.direction === 'less' ? foreheadInOutLess : foreheadInOutMore;
    }
    if (this.props.id === 'browInOut') {
      return this.props.direction === 'less' ? browInOutLess : browInOutMore;
    }

    if (this.props.id === 'eyeSize') {
      return this.props.direction === 'less' ? eyeSizeLess : eyeSizeMore;
    }
    if (this.props.id === 'eyeWidth') {
      return this.props.direction === 'less' ? eyeWidthLess : eyeWidthMore;
    }
    if (this.props.id === 'outerEyeDownUp') {
      return this.props.direction === 'less' ? outerEyeDownUpLess : outerEyeDownUpMore;
    }
    if (this.props.id === 'eyeCloseness') {
      return this.props.direction === 'less' ? eyeClosenessLess : eyeClosenessMore;
    }
    if (this.props.id === 'eyesUpDown') {
      return this.props.direction === 'less' ? eyesUpDownLess : eyesUpDownMore;
    }
    if (this.props.id === 'orbitUpDown') {
      return this.props.direction === 'less' ? orbitUpDownLess : orbitUpDownMore;
    }
    if (this.props.id === 'eyeDeepness') {
      return this.props.direction === 'less' ? eyeDeepnessLess : eyeDeepnessMore;
    }
    if (this.props.id === 'eyeSquint') {
      return this.props.direction === 'less' ? eyeSquintLess : eyeSquintMore;
    }
    if (this.props.id === 'eyelashSize') {
      return this.props.direction === 'less' ? eyelashSizeLess : eyelashSizeMore;
    }
    if (this.props.id === 'eyesRotate') {
      return this.props.direction === 'less' ? eyesRotateLess : eyesRotateMore;
    }

    if (this.props.id === 'noseSize') {
      return this.props.direction === 'less' ? noseSizeLess : noseSizeMore;
    }
    if (this.props.id === 'noseWidth') {
      return this.props.direction === 'less' ? noseWidthLess : noseWidthMore;
    }
    if (this.props.id === 'nostrilWidth') {
      return this.props.direction === 'less' ? nostrilWidthLess : nostrilWidthMore;
    }
    if (this.props.id === 'noseLength') {
      return this.props.direction === 'less' ? noseLengthLess : noseLengthMore;
    }
    if (this.props.id === 'noseUpDown') {
      return this.props.direction === 'less' ? noseUpDownLess : noseUpDownMore;
    }
    if (this.props.id === 'noseTurnedUpDown') {
      return this.props.direction === 'less' ? noseTurnedUpDownLess : noseTurnedUpDownMore;
    }
    if (this.props.id === 'noseTipUpDown') {
      return this.props.direction === 'less' ? noseTipUpDownLess : noseTipUpDownMore;
    }
    if (this.props.id === 'noseTipTurn') {
      return this.props.direction === 'less' ? noseTipTurnLess : noseTipTurnMore;
    }
    if (this.props.id === 'bridgeCurve') {
      return this.props.direction === 'less' ? bridgeCurveLess : bridgeCurveMore;
    }
    if (this.props.id === 'bridgeInOut') {
      return this.props.direction === 'less' ? bridgeInOutLess : bridgeInOutMore;
    }
    if (this.props.id === 'bridgeWidth') {
      return this.props.direction === 'less' ? bridgeWidthLess : bridgeWidthMore;
    }
    if (this.props.id === 'noseInOut') {
      return this.props.direction === 'less' ? noseInOutLess : noseInOutMore;
    }

    if (this.props.id === 'mouthWidth') {
      return this.props.direction === 'less' ? mouthWidthLess : mouthWidthMore;
    }
    if (this.props.id === 'mouthUpDown') {
      return this.props.direction === 'less' ? mouthUpDownLess : mouthUpDownMore;
    }
    if (this.props.id === 'mouthCornerDownUp') {
      return this.props.direction === 'less' ? mouthCornerDownUpLess : mouthCornerDownUpMore;
    }
    if (this.props.id === 'lipsThickness') {
      return this.props.direction === 'less' ? lipsThicknessLess : lipsThicknessMore;
    }
    if (this.props.id === 'upperLipPinch') {
      return this.props.direction === 'less' ? upperLipPinchLess : upperLipPinchMore;
    }
    if (this.props.id === 'lowerLipPinch') {
      return this.props.direction === 'less' ? lowerLipPinchLess : lowerLipPinchMore;
    }
    if (this.props.id === 'upperLipThickness') {
      return this.props.direction === 'less' ? upperLipThicknessLess : upperLipThicknessMore;
    }
    if (this.props.id === 'lowerLipThickness') {
      return this.props.direction === 'less' ? lowerLipThicknessLess : lowerLipThicknessMore;
    }
    if (this.props.id === 'mouthCornerFwdBack') {
      return this.props.direction === 'less' ? mouthCornerFwdBackLess : mouthCornerFwdBackMore;
    }
    if (this.props.id === 'mouthInOut') {
      return this.props.direction === 'less' ? mouthInOutLess : mouthInOutMore;
    }

    if (this.props.id === 'chinUpDown') {
      return this.props.direction === 'less' ? chinUpDownLess : chinUpDownMore;
    }
    if (this.props.id === 'chinInOut') {
      return this.props.direction === 'less' ? chinInOutLess : chinInOutMore;
    }
    if (this.props.id === 'chinPoint') {
      return this.props.direction === 'less' ? chinPointLess : chinPointMore;
    }
    if (this.props.id === 'jawInOut') {
      return this.props.direction === 'less' ? jawInOutLess : jawInOutMore;
    }
    if (this.props.id === 'jawSquareAngled') {
      return this.props.direction === 'less' ? jawSquareAngledLess : jawSquareAngledMore;
    }
    if (this.props.id === 'jawWidth') {
      return this.props.direction === 'less' ? jawWidthLess : jawWidthMore;
    }
    if (this.props.id === 'jawTaper') {
      return this.props.direction === 'less' ? jawTaperLess : jawTaperMore;
    }

    return null;
  }
}
