var expect = require("chai").expect;
var initCap = require("../helpers/initialcap.js");

describe("Initial cap", function () {
  it("should reduce all caps to initial cap.",
    function () {
      expect(initCap("BOB")).to.equal("Bob")
    });
  it("should make the first letter uppercase if it's lowercase.",
    function () {
      expect(initCap("stanley")).to.equal("Stanley")
    });
  it("should not change string if properly capitalized.",
    function () {
      expect(initCap("Avery")).to.equal("Avery")
    });
})