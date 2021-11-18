function createRobot(x, y) {
  // lanza error si x o y están fuera de los límites (0 a 10)
  let px = x;
  let py = y;

  return {
    getX: () => `${px}`,
    getY: () => `${py}`,
  };
}

/* const robot = createRobot(1, 1);
console.log(robot.getX(), robot.getY()); */

module.exports = createRobot;
