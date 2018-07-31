var expect = require("chai").expect;
var slugify = require("../helpers/slugify.js");

describe("Slugify", function () {
  it("should replace spaces with hyphens: 2 words.",
    function () {
      expect(slugify("Jim Bob")).to.equal("jim-bob")
    });
  it("should replace spaces with hyphens: 3 words.",
    function () {
      expect(slugify("Jimbo Billy Bob")).to.equal("jimbo-billy-bob")
    });
  it("should trim white space before.",
    function () {
      expect(slugify(" loretta")).to.equal("loretta")
    });
  it("should trim white space after.",
    function () {
      expect(slugify("Dolly ")).to.equal("dolly")
    });
  it("should replace letters that have diacritical marks with ones without (ex. o for ö.",
    function () {
      expect(slugify("göthe")).to.equal("gothe")
    });
  it("should remove .shtml",
    function () {
      expect(slugify("einstein.shtml")).to.equal("einstein")
    });

})