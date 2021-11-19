function createRobot(x, y) {
  // lanza error si x o y están fuera de los límites (0 a 10)
  let px = x;
  let py = y;

  return {
    moveUp: () => {
      py++;
      return py;
    },
    moveDown: () => {
      py--;
      return py;
    },
    moveLeft: () => {
      px--;
      return px;
    },
    moveRight: () => {
      px++;
      return px;
    },
    getX: () => {
      if (px > 10 || px < 0) {
        return new RangeError("Out of limits");
      } else {
        return px;
      }
    },
    getY: () => {
      if (py > 10 || py < 0) {
        return new RangeError("Out of limits");
      } else {
        return py;
      }
    },
  };
}

const robot = createRobot(10, 10);
robot.moveUp();
console.log(robot.getX(), robot.getY());

module.exports = createRobot;
