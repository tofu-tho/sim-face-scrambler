const uiStructure = require('./uiStructure');
const random = require('./random')

class UiDescriber {
  getBuildASimButton() {
    return uiStructure.buildASimButton;
  }

  getLadyButton() {
    return uiStructure.ladyButton;
  }

  getManButton() {
    return uiStructure.manButton;
  }

  chooseRandomTemplateIndex(gender) {
    if (gender === "female") {
      return random.generateNumber(0, 26);
    }
    else {
      return random.generateNumber(1, 27);
    }
  }

  chooseTwoRandomTemplateIndexes(gender) {
    if (gender === "female") {
      return random.generateTwoUniqueNumbers(0, uiStructure.templatesCount - 2);
    }
    else {
      return random.generateTwoUniqueNumbers(1, uiStructure.templatesCount - 1);
    }
  }

  getTemplatePages() {
    return uiStructure.templatesPages;
  }

  getDoneButton() {
    return uiStructure.doneButton;
  }
}

module.exports = UiDescriber;
