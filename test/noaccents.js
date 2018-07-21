var expect = require("chai").expect;
var noaccents = require("../helpers/noaccents.js");

describe("No accents", function () {
  it("should replace letters that have diacritical marks with ones without (ex. o for ö.",
    function () {
      expect(noaccents("Göthe")).to.equal("Gothe")
    });
  it("should do the same for uc letters (ex. Élin to Elin)",
    function () {
      expect(noaccents("Göthe")).to.equal("Gothe")
    });
})