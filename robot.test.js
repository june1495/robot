const createRobot = require("./robot");
describe("Robot.js", () => {
  test("should not return null or undefined", () => {
    expect(createRobot()).not.toBeFalsy();
  });
  test("GetX should return 0", () => {
    const robotin = createRobot(0, 0);
    expect(robotin.getX()).toEqual(0);
  });
  test("GetY should return 0", () => {
    const robotin = createRobot(0, 0);
    expect(robotin.getX()).toEqual(0);
  });
  test("GetX should return 1", () => {
    const robotin = createRobot(0, 0);
    robotin.moveRight();
    expect(robotin.getX()).toEqual(1);
  });
  test("GetY should return 1", () => {
    const robotin = createRobot(0, 0);
    robotin.moveUp();
    expect(robotin.getY()).toEqual(1);
  });
});
