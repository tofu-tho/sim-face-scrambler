const buildASimButton = {x: 563, y: 265};

const nextButton = { x: 953, y: 395 };

const modifiersTab = { x: 726, y: 165 };

const manButton = { x: 419, y: 148 };
const ladyButton = { x: 399, y: 135 };

const templatesTabButton = { x: 628, y: 165 };

const doneButton = { x: 689, y: 637 };

const firstFeature = {
  decrease: { x: 663, y: 305 },
  increase: { x: 597, y: 305 }
}
const secondFeature = {
  decrease: { x: 653, y: 305 },
  increase: { x: 703, y: 305 }
}
const thirdFeature = {
  decrease: { x: 763, y: 305 },
  increase: { x: 803, y: 305 }
}
const fourthFeature = {
  decrease: { x: 873, y: 305 },
  increase: { x: 913, y: 305 }
}
const fifthFeature = {
  decrease: { x: 663, y: 390 },
  increase: { x: 597, y: 390 }
}
const sixthFeature = {
  decrease: { x: 653, y: 390 },
  increase: { x: 703, y: 390 }
}
const seventhFeature = {
  decrease: { x: 763, y: 390 },
  increase: { x: 803, y: 390 }
}
const eighthFeature = {
  decrease: { x: 873, y: 390 },
  increase: { x: 913, y: 390 }
}
const ninthFeature = {
  decrease: { x: 663, y: 477 },
  increase: { x: 597, y: 477 }
}
const tenthFeature = {
  decrease: { x: 653, y: 477 },
  increase: { x: 703, y: 477 }
}
const eleventhFeature = {
  decrease: { x: 763, y: 477 },
  increase: { x: 803, y: 477 }
}
const twelfthFeature = {
  decrease: { x: 873, y: 477 },
  increase: { x: 913, y: 477 }
}

const modifyFacePage1 = [
  {
    name: 'Face Gaunt-Plump',
    id: 'faceGauntPlump',
    ...firstFeature,
  },
  // {
  //   name: 'Face Short-Long',
  //   id: 'faceShortLong',
  //   ...secondFeature,
  // },
  {
    name: 'Cheek Size',
    id: 'cheekSize',
    ...thirdFeature,
  },
  {
    name: 'Lower Face Width',
    id: 'lowerFaceWidth',
    ...fourthFeature,
  },
  {
    name: 'Upper Face Width',
    id: 'upperFaceWidth',
    ...fifthFeature,
  },
  {
    name: 'Underneck Up-Down',
    id: 'underneckUpDown',
    ...sixthFeature,
  },
  {
    name: 'Cheekbone Fwd-Back',
    id: 'cheekboneFwdBack',
    ...seventhFeature,
  },
  {
    name: 'Cheekbone Size',
    id: 'cheekboneSize',
    ...eighthFeature,
  },
  {
    name: 'Cheekbone Up-Down',
    id: 'cheekboneUpDown',
    ...ninthFeature,
  },
  {
    name: 'Ear Size',
    id: 'earSize',
    ...tenthFeature,
  },
]

const modifyBrowPage1 = [
  {
    name: 'Brow Thickness',
    id: 'browThickness',
    ...firstFeature,
  },
  {
    name: 'Brow Up-Down',
    id: 'browUpDown',
    ...secondFeature,
  },
  {
    name: 'Brow Arch',
    id: 'browArch',
    ...thirdFeature,
  },
  {
    name: 'Brow Rotate',
    id: 'browRotate',
    ...fourthFeature,
  },
  {
    name: 'Brow Orbit Shape',
    id: 'browOrbitShape',
    ...fifthFeature,
  },
  {
    name: 'Forehead In-Out',
    id: 'foreheadInOut',
    ...sixthFeature,
  },
  {
    name: 'Brow In-Out',
    id: 'browInOut',
    ...seventhFeature,
  }
]

const modifyEyesPage1 = [
  {
    name: 'Eye Size',
    id: 'eyeSize',
    ...firstFeature,
  },
  {
    name: 'Eye Width',
    id: 'eyeWidth',
    ...secondFeature,
  },
  {
    name: 'Outer Eye Down-Up',
    id: 'outerEyeDownUp',
    ...thirdFeature,
  },
  {
    name: 'Eye Closeness',
    id: 'eyeCloseness',
    ...fourthFeature,
  },
  {
    name: 'Eyes Up-Down',
    id: 'eyesUpDown',
    ...fifthFeature,
  },
  // {
  //   name: 'Orbit Up-Down',
  //   id: 'orbitUpDown',
  //   ...sixthFeature,
  // },
  {
    name: 'Eye Deepness',
    id: 'eyeDeepness',
    ...seventhFeature,
  },
  {
    name: 'Eyelash Size',
    id: 'eyelashSize',
    ...eighthFeature,
  },
  {
    name: 'Eyes Rotate',
    id: 'eyesRotate',
    ...ninthFeature,
  },
]

const modifyNosePage1 = [
  {
    name: 'Nose Size',
    id: 'noseSize',
    ...firstFeature,
  },
  {
    name: 'Nose Width',
    id: 'noseWidth',
    ...secondFeature,
  },
  {
    name: 'Nostril Width',
    id: 'nostrilWidth',
    ...thirdFeature,
  },
  {
    name: 'Nose Length',
    id: 'noseLength',
    ...fourthFeature,
  },
  {
    name: 'Nose Up-Down',
    id: 'noseUpDown',
    ...fifthFeature,
  },
  {
    name: 'Nose Turned Up-Down',
    id: 'noseTurnedUpDown',
    ...sixthFeature,
  },
  {
    name: 'Nose Tip Up-Down',
    id: 'noseTipUpDown',
    ...seventhFeature,
  },
  {
    name: 'Nose Tip Turn',
    id: 'noseTipTurn',
    ...eighthFeature,
  },
  {
    name: 'Bridge Curve',
    id: 'bridgeCurve',
    ...ninthFeature,
  },
  {
    name: 'Bridge In-Out',
    id: 'bridgeInOut',
    ...tenthFeature,
  },
  {
    name: 'Bridge Width',
    id: 'bridgeWidth',
    ...eleventhFeature,
  },
  {
    name: 'Nose In-Out',
    id: 'noseInOut',
    ...twelfthFeature,
  },
]

const modifyMouthPage1 = [
  {
    name: 'Mouth Width',
    id: 'mouthWidth',
    ...firstFeature,
  },
  {
    name: 'Mouth Up-Down',
    id: 'mouthUpDown',
    ...secondFeature,
  },
  {
    name: 'Mouth Corner Down-Up',
    id: 'mouthCornerDownUp',
    ...thirdFeature,
  },
  {
    name: 'Lips Thickness',
    id: 'lipsThickness',
    ...fourthFeature,
  },
  {
    name: 'Upper Lip Pinch',
    id: 'upperLipPinch',
    ...fifthFeature,
  },
  {
    name: 'Lower Lip Pinch',
    id: 'lowerLipPinch',
    ...sixthFeature,
  },
  {
    name: 'Upper Lip Thickness',
    id: 'upperLipThickness',
    ...seventhFeature,
  },
  {
    name: 'Lower Lip Thickness',
    id: 'lowerLipThickness',
    ...eighthFeature,
  },
  {
    name: 'Mouth Corner Fwd-Back',
    id: 'mouthCornerFwdBack',
    ...ninthFeature,
  },
  {
    name: 'Mouth In-Out',
    id: 'mouthInOut',
    ...tenthFeature,
  },
]

const modifyJawPage1 = [
  {
    name: 'Chin Up-Down',
    id: 'chinUpDown',
    ...firstFeature,
  },
  {
    name: 'Chin In-Out',
    id: 'chinInOut',
    ...secondFeature,
  },
  {
    name: 'Chin Point',
    id: 'chinPoint',
    ...thirdFeature,
  },
  {
    name: 'Jaw In-Out',
    id: 'jawInOut',
    ...fourthFeature,
  },
  {
    name: 'Jaw Square-Angled',
    id: 'jawSquareAngled',
    ...fifthFeature,
  },
  {
    name: 'Jaw Width',
    id: 'jawWidth',
    ...sixthFeature,
  },
  {
    name: 'Jaw Taper',
    id: 'jawTaper',
    ...seventhFeature,
  },
]

const modifyFacePages = [modifyFacePage1];
const modifyBrowPages = [modifyBrowPage1];
const modifyEyesPages = [modifyEyesPage1];
const modifyNosePages = [modifyNosePage1];
const modifyMouthPages = [modifyMouthPage1];
const modifyJawPages = [modifyJawPage1];

const modifyFaceTab = {x: 518, y: 198};
const modifyBrowTab = { x: 593, y: 198 };
const modifyEyesTab = { x: 653, y: 198 };
const modifyNoseTab = { x: 728, y: 198 };
const modifyMouthTab = { x: 798, y: 198 };
const modifyJawTab = { x: 868, y: 198};

const modifyTabs = [
  { button: modifyFaceTab, pages: modifyFacePages },
  { button: modifyBrowTab, pages: modifyBrowPages },
  { button: modifyEyesTab, pages: modifyEyesPages },
  { button: modifyNoseTab, pages: modifyNosePages },
  { button: modifyMouthTab, pages: modifyMouthPages },
  { button: modifyJawTab, pages: modifyJawPages }
]

const firstTemplate = {
  xMin: 538,
  xMax: 615,
  y: 376,
  button: {x: 578, y: 325}
}
const secondTemplate = {
  xMin: 643,
  xMax: 720,
  y: 376,
  button: {x: 684, y: 325}
}
const thirdTemplate = {
  xMin: 748,
  xMax: 825,
  y: 376,
  button: {x: 789, y: 325}
}
const fourthTemplate = {
  xMin: 853,
  xMax: 930,
  y: 376,
  button: {x: 894, y: 325}
}
const fifthTemplate = {
  xMin: 538,
  xMax: 615,
  y: 506,
  button: {x: 578, y: 453}
}
const sixthTemplate = {
  xMin: 643,
  xMax: 720,
  y: 506,
  button: {x: 684, y: 453}
}
const seventhTemplate = {
  xMin: 748,
  xMax: 825,
  y: 506,
  button: {x: 789, y: 453}
}
const eighthTemplate = {
  xMin: 853,
  xMax: 930,
  y: 506,
  button: {x: 894, y: 453}
}

function getTemplateDragRange(template) {
  const adjustedTemplate = {
    start: {x: template.xMin, y: template.y},
    button: template.button,
    getEnd: (percentage) => {
      const difference = template.xMax - template.xMin;
      const adjustedDifference = difference * percentage;
      return {
        x: template.xMin + adjustedDifference,
        y: template.y
      }
    },
  }
  return adjustedTemplate;
}

const faceTemplatesPageLengthFive = [
  getTemplateDragRange(firstTemplate),
  getTemplateDragRange(secondTemplate),
  getTemplateDragRange(thirdTemplate),
  getTemplateDragRange(fourthTemplate),
  getTemplateDragRange(fifthTemplate),
]

const faceTemplatesPageLengthEight = [
  getTemplateDragRange(firstTemplate),
  getTemplateDragRange(secondTemplate),
  getTemplateDragRange(thirdTemplate),
  getTemplateDragRange(fourthTemplate),
  getTemplateDragRange(fifthTemplate),
  getTemplateDragRange(sixthTemplate),
  getTemplateDragRange(seventhTemplate),
  getTemplateDragRange(eighthTemplate),
]

const templatesPages = [
  faceTemplatesPageLengthEight,
  faceTemplatesPageLengthEight,
  faceTemplatesPageLengthEight,
  faceTemplatesPageLengthFive
]

const templatesCount = templatesPages.reduce((total, currentPage) => {
  return total + currentPage.length;
}, 0);

const faceTemplatesTab = {x: 518, y: 198};
const browTemplatesTab = { x: 593, y: 198 };
const eyesTemplatesTab = { x: 653, y: 198 };
const noseTemplatesTab = { x: 728, y: 198 };
const mouthTemplatesTab = { x: 798, y: 198 };
const jawTemplatesTab = { x: 868, y: 198};

const templatesTabs = [
  faceTemplatesTab,
  browTemplatesTab,
  eyesTemplatesTab,
  noseTemplatesTab,
  mouthTemplatesTab,
  jawTemplatesTab
]

module.exports = {
  manButton,
  ladyButton,
  templatesTabs,
  templatesPages,
  templatesTabButton,
  templatesCount,
  nextButton,
  buildASimButton,
  modifiersTab,
  modifyTabs,
  faceTemplatesTab,
  doneButton
}
