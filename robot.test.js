const createRobot = require("./robot");
describe("Robot.js", () => {
  test("should not return null or undefined", () => {
    expect(createRobot()).not.toBeFalsy();
  });
  test("GetX should return 5", () => {
    const robotin = createRobot(5, 5);
    expect(robotin.getX()).toEqual(5);
  });
  test("GetY should return 5", () => {
    const robotin = createRobot(5, 5);
    expect(robotin.getX()).toEqual(5);
  });
  test("GetX should return 6", () => {
    const robotin = createRobot(5, 5);
    robotin.moveRight();
    expect(robotin.getX()).toEqual(6);
  });
  test("GetY should return 6", () => {
    const robotin = createRobot(5, 5);
    robotin.moveUp();
    expect(robotin.getY()).toEqual(6);
  });
  test("GetX should return 5", () => {
    const robotin = createRobot(5, 5);
    robotin.moveRight();
    robotin.moveLeft();
    expect(robotin.getX()).toEqual(5);
  });
  test("GetY should return 5", () => {
    const robotin = createRobot(5, 5);
    robotin.moveUp();
    robotin.moveDown();
    expect(robotin.getY()).toEqual(5);
  });
  test("GetY should return an error", () => {
    const robotin = createRobot(10, 10);
    robotin.moveUp();
    expect(robotin.getY()).toEqual(RangeError("Out of limits"));
  });
  test("GetX should return an error", () => {
    const robotin = createRobot(10, 10);
    robotin.moveRight();
    expect(robotin.getX()).toEqual(RangeError("Out of limits"));
  });
  test("GetY should return an error", () => {
    const robotin = createRobot(0, 0);
    robotin.moveDown();
    expect(robotin.getY()).toEqual(RangeError("Out of limits"));
  });
  test("GetX should return an error", () => {
    const robotin = createRobot(0, 0);
    robotin.moveLeft();
    expect(robotin.getX()).toEqual(RangeError("Out of limits"));
  });
});
