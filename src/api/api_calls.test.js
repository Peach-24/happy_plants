const { fetchLatLng } = require("./api_calls");
const axios = require("axios");

describe("fetchLatLng API call - uses postcodes.io", () => {
  // happy path
  it("returns an empty string when passed an empty string", () => {
    expect(fetchLatLng("")).toBe("");
  });
  it("returns an empty string when passed undefined, null, or NaN", () => {
    expect(fetchLatLng(undefined)).toBe("");
    expect(fetchLatLng(null)).toBe("");
    expect(fetchLatLng(NaN)).toBe("");
  });
  //   it("returns `Error: Invalid Postcode` when passed an incorrect postcode", () => {
  //     const invalidPostcode = "WA159BA";
  //     const expectedOutput = `Error: Invalid Postcode`;
  //     expect(fetchLatLng(invalidPostcode)).toBe("not this");
  //   });
});
