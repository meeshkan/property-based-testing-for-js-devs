import { getNumber } from "../src/getNumber";
const fc = require("fast-check");

// Function that turns a string into a number using JavaScript's built-in Number()
const getNumber = inputString => {
  const numberFromInputString = Number(inputString);
  return numberFromInputString;
};

// Example-based test
test("turns an input string into a number", () => {
  expect(getNumber("35")).toBe(35);
  expect(getNumber("59.99")).toBe(59.99);
  // Uncomment the following line to see the failing test case:
  // expect(getNumber("19,95")).toBe(19.95);
});

// Property-based test with fast-check
test("also turns an input string into a number", () => {
  fc.assert(
    // fc.float() tests uniformly distributed float values between 0.0 and 1.0
    fc.property(fc.float(), testFloat => {
      expect(getNumber(`${testFloat}`)).toBe(testFloat);
    })
  );
  fc.assert(
    // fc.integer() tests all possible integers ie. from -2147483648 to 2147483647
    fc.property(fc.integer(), testInteger => {
      expect(getNumber(`${testInteger}`)).toBe(testInteger);
    })
  );
});
