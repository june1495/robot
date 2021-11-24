const createRobot = require("./robot");
describe("Robot.js", () => {
  test("should not return null or undefined", () => {
    expect(createRobot()).not.toBeFalsy();
  });
  test("GetX should return 5", () => {
    const robot = createRobot(5, 5);
    expect(robot.getX()).toEqual(5);
  });
  test("GetY should return 5", () => {
    const robot = createRobot(5, 5);
    expect(robot.getX()).toEqual(5);
  });
  test("GetX should return 6", () => {
    const robot = createRobot(5, 5);
    robot.moveRight();
    expect(robot.getX()).toEqual(6);
  });
  test("GetY should return 6", () => {
    const robot = createRobot(5, 9);
    robot.moveUp();
    expect(robot.getY()).toEqual(10);
  });
  test("GetX should return 5", () => {
    const robotin = createRobot(8, 5);
    robotin.moveRight();
    expect(robotin.getX()).toEqual(9);
  });
  test("GetY should return 5", () => {
    const robotin = createRobot(5, 2);
    robotin.moveUp();
    robotin.moveDown();
    expect(robotin.getY()).toEqual(2);
  });
  test("GetY should return an error", () => {
    const robotin = createRobot(10, 10);
    robotin.moveUp();
    expect(robotin.getY()).toEqual(Error("Out of limits"));
  });
  test("GetX should return an error", () => {
    const robotin = createRobot(10, 10);
    robotin.moveRight();
    expect(robotin.getX()).toEqual(Error("Out of limits"));
  });
});
