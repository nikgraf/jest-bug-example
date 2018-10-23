const add = require("./index").add;

test("adding two numbers", () => {
  expect(add(1, 4)).toBe(5);
});

test("some date to be instance of Date", () => {
  expect(new Date() instanceof Date).toBe(true);
  // NOTE this is an object containing methods like getMonth, but isn't a Date instance anymore
  expect(global.someDate instanceof Date).toBe(true);
});