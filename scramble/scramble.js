const robot = require('robotjs');
const sleep = require('sleep');

const UiInteractor = require('./uiInteractor');
const UiDescriber = require('./uiDescriber');
const uiStructure = require('./uiStructure');
const random = require('./random');

function generateSim(scrambleOptions) {
  const uiInteractor = new UiInteractor();
  const uiDescriber = new UiDescriber();
  for (let i = 0; i < scrambleOptions.numOfSims; i++) {
    createNewSim(uiInteractor, uiDescriber);
    const { femaleChance, temperStrength, modifierRangeMinimum, modifierRangeMaximum } = scrambleOptions
    const gender = pickGender(uiInteractor, uiDescriber, femaleChance);
    pickTemplate(uiInteractor, uiDescriber, gender);
    scrambleFace(uiInteractor, modifierRangeMinimum, modifierRangeMaximum);
    temperFace(uiInteractor, uiDescriber, gender, temperStrength);
    saveSim(uiInteractor, uiDescriber);
  }
}

function createNewSim(uiInteractor, uiDescriber) {
  uiInteractor.wait(2000);
  uiInteractor.click(uiDescriber.getBuildASimButton());
}

function pickGender(uiInteractor, uiDescriber, femaleChance) {
  let gender = null;
  const genderRoll = random.generateNumber(0, 100);
  if (genderRoll <= femaleChance) {
    uiInteractor.click(uiDescriber.getLadyButton());
    gender = "female";
  }
  else {
    uiInteractor.click(uiDescriber.getManButton());
    gender = "male";
  }
  uiInteractor.wait(500);
  return gender;
}

function pickTemplate(uiInteractor, uiDescriber, gender) {
  uiInteractor.click(uiStructure.templatesTabButton);
  uiInteractor.wait(500);
  uiInteractor.click(uiStructure.faceTemplatesTab);
  uiInteractor.wait(500);

  const chosenTemplateIndex = uiDescriber.chooseRandomTemplateIndex(gender);

  const templatePages = uiDescriber.getTemplatePages();
  let matched = false;
  for (let pageIndex = 0; pageIndex < templatePages.length; pageIndex++) {
    if (matched === true) {
      return;
    }
    let page = templatePages[pageIndex];
    const templateOffset = pageIndex * templatePages[0].length;

    page.forEach((template, relativeTemplateIndex) => {
      const templateIndex = templateOffset + relativeTemplateIndex;
      if (templateIndex === chosenTemplateIndex) {
        uiInteractor.wait(500);
        matched = true;
        uiInteractor.click(template.button)
        uiInteractor.wait(500);
      }
    })
    uiInteractor.wait(500);
    uiInteractor.click(uiStructure.nextButton);
  }
}

function scrambleFace(uiInteractor, modifierRangeMinimum, modifierRangeMaximum) {
  uiInteractor.wait(500);
  uiInteractor.click(uiStructure.modifiersTab);

  uiStructure.modifyTabs.forEach((modifyTab) => {
    uiInteractor.wait(500);
    uiInteractor.click(modifyTab.button);
    uiInteractor.wait(500);
    modifyTab.pages.forEach((features) => {
      features.forEach((feature) => {
        const change = random.generateNumber(modifierRangeMinimum, modifierRangeMaximum);
        adjustFeatureValue(uiInteractor, feature, change);
      })
      uiInteractor.wait(50);
      uiInteractor.click(uiStructure.nextButton);
    })
  })
}

function adjustFeatureValue(uiInteractor, feature, change) {
  const directionButton = change > 0 ? feature.increase : feature.decrease;
  for (let i = 0; i < Math.abs(change); i++) {
    uiInteractor.wait(25);
    uiInteractor.click(directionButton);
  }
}

function temperFace(uiInteractor, uiDescriber, gender, temperStrength) {
  uiInteractor.wait(500);
  uiInteractor.click(uiStructure.templatesTabButton)
  uiInteractor.wait(500);

  uiStructure.templatesTabs.forEach((tab) => {
    uiInteractor.click(tab);
    uiInteractor.wait(500);
    const indexesToTemper = uiDescriber.chooseTwoRandomTemplateIndexes(gender);
    const largestIndex = Math.max(...indexesToTemper);

    for (let pageIndex = 0; pageIndex < uiStructure.templatesPages.length; pageIndex++) {
      let page = uiStructure.templatesPages[pageIndex];
      const templateOffset = pageIndex * uiStructure.templatesPages[0].length;
      if (templateOffset > largestIndex) {
        break;
      }

      page.forEach((template, relativeTemplateIndex) => {
        const templateIndex = templateOffset + relativeTemplateIndex;
        if (templateIndex === indexesToTemper[0] || templateIndex === indexesToTemper[1]) {
          uiInteractor.wait(500);
          uiInteractor.drag(template.start, template.getEnd(temperStrength / 100))
          uiInteractor.wait(500);
        }
      })
      uiInteractor.wait(500);
      uiInteractor.click(uiStructure.nextButton);
    }
  })
}

function saveSim(uiInteractor, uiDescriber) {
  uiInteractor.wait(500);
  uiInteractor.click(uiDescriber.getDoneButton())
  uiInteractor.wait(500);
}

module.exports = generateSim;
