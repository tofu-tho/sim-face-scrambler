const sleep = require('sleep');
const robot = require('robotjs');

const screenSize = robot.getScreenSize();

const windowWidth = 1024;
const windowHeight = 768;

const windowOffsetX = (screenSize.width - windowWidth) / 2
const windowOffsetY = ((screenSize.height - windowHeight) / 2) - 20 // 20 is the size of the app bar

class UiInteractor {
  wait(milliseconds) {
    sleep.msleep(milliseconds);
  }

  click(element) {
    robot.moveMouse(this.toAbsoluteX(element.x), this.toAbsoluteY(element.y));
    robot.mouseClick();
  }

  drag(start, end) {
    robot.moveMouse(this.toAbsoluteX(start.x), this.toAbsoluteY(start.y));
    robot.mouseToggle("down");
    this.wait(50);
    robot.dragMouse(this.toAbsoluteX(end.x), this.toAbsoluteY(end.y));
    this.wait(50);
    robot.mouseToggle("up");

  }

  toAbsoluteX(xCoord) {
    return xCoord + windowOffsetX;
  }

  toAbsoluteY(yCoord) {
    return yCoord + windowOffsetY;
  }
}

module.exports = UiInteractor;
