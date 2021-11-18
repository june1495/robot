const createRobot = require("./robot");
describe("Robot.js", () => {
  test("should not return null or undefined", () => {
    expect(createRobot()).not.toBeFalsy();
  });
  test("GetX should return 1", () => {
    const robotin = createRobot(1,2)
    expect(robotin.getX()).toEqual("1");
  });
  test("GetY should return 2", () => {
    const robotin = createRobot(1,2)
    expect(robotin.getX()).toEqual("1");
  });
});
