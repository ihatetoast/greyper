var expect = require("chai").expect;
var getVagaName = require("../helpers/vaganame.js");

describe("Get the VAGA name", function () {
  it("should return false any string that starts with DOB.",
    function () {
      expect(getVagaName("DOB: 7/12/2014 Gender: Female Color: Black Weight: 61 Home Acclimated: No")).to.equal('');
    });
  it("should return false any string that is 'Sponsored by:'.",
    function () {
      expect(getVagaName("Sponsored by:")).to.equal('');
    });
  it("should return false any string that is 'Click Here to Sponsor Me'.",
    function () {
      expect(getVagaName("Click Here to Sponsor Me")).to.equal('');
    });
  it("should return false any empty string.",
    function () {
      expect(getVagaName("")).to.equal('');
    });
  it("should return take the name out of a longer string.",
    function () {
      expect(getVagaName('AMF Bet On Me "Serena"')).to.equal('Serena');
    });
  it("should return take the name out of a longer string.",
    function () {
      expect(getVagaName('AMF Bet On Me "Serena"DOB: 7/12/2014 Gender: Female Color: Black Weight: 61 Home Acclimated: NoSponsored by:Click Here to Sponsor Me')).to.equal('Serena');
    });

})