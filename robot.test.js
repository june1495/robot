describe("Robot.js", () => {
  test("should not return null or undefined", () => {
    expect(createRobot()).not.toBeFalsy();
  });
});
