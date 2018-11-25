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

pageLengthSeven = [firstFeature, secondFeature, thirdFeature, fourthFeature, fifthFeature, sixthFeature]
pageLengthTen = [firstFeature, secondFeature, thirdFeature, fourthFeature, fifthFeature, sixthFeature, seventhFeature, eighthFeature, ninthFeature, tenthFeature]
pageLengthTwelve = [firstFeature, secondFeature, thirdFeature, fourthFeature, fifthFeature, sixthFeature, seventhFeature, eighthFeature, ninthFeature, tenthFeature, eleventhFeature, twelfthFeature]
pageLengthTenMissingSecondItem = [firstFeature, thirdFeature, fourthFeature, fifthFeature, sixthFeature, seventhFeature, eighthFeature, ninthFeature, tenthFeature]
pageLengthTenMissingSixthItem = [firstFeature, thirdFeature, fourthFeature, fifthFeature, sixthFeature, seventhFeature, eighthFeature, ninthFeature, tenthFeature]

const modifyFacePage = [pageLengthTenMissingSecondItem];
const modifyBrowPage = [pageLengthSeven];
const modifyEyesPage = [pageLengthTenMissingSixthItem];
const modifyNosePage = [pageLengthTwelve];
const modifyMouthPage = [pageLengthTen];
const modifyJawPage = [pageLengthSeven];

const modifyFaceTab = {x: 518, y: 198};
const modifyBrowTab = { x: 593, y: 198 };
const modifyEyesTab = { x: 653, y: 198 };
const modifyNoseTab = { x: 728, y: 198 };
const modifyMouthTab = { x: 798, y: 198 };
const modifyJawTab = { x: 868, y: 198};

const modifyTabs = [
  { button: modifyFaceTab, pages: modifyFacePage },
  { button: modifyBrowTab, pages: modifyBrowPage },
  { button: modifyEyesTab, pages: modifyEyesPage },
  { button: modifyNoseTab, pages: modifyNosePage },
  { button: modifyMouthTab, pages: modifyMouthPage },
  { button: modifyJawTab, pages: modifyJawPage }
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
