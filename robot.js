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
    getX: () => px,
    getY: () => py,
  };
}

/* const robot = createRobot(1, 1);
console.log(robot.getX(), robot.getY()); */

module.exports = createRobot;
