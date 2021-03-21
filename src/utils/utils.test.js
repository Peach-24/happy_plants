const { isValidPostcode, generatePlantAdvice } = require("./utils.js");

describe("isValidPostcode", () => {
  it("returns false for invalid UK postcode", () => {
    expect(isValidPostcode("llllf")).toBe(false);
  });
  it("returns true for valid UK postcode", () => {
    expect(isValidPostcode("WA15 9BA")).toBe(true);
    expect(isValidPostcode("WA159BA")).toBe(true);
    expect(isValidPostcode("wa159ba")).toBe(true);
  });
});

describe("generatePlantAdvice", () => {
  it("returns an empty string when passed no arguments / undefined", () => {
    expect(generatePlantAdvice()).toBe("");
  });
});
