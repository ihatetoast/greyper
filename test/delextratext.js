var expect = require("chai").expect;
var delextratext = require("../helpers/delextratext.js");

//add to as i find substrings
subStrings = ["adoption pending", "adopted", "pending adoption", "permanent foster"];
describe("Delete extra text", function () {
  it("should rem substr from str if substr is in array passed.",
    function () {
      expect(delextratext("YUKONAdoption Pending", subStrings)).to.equal("yukon")
    });
  it("should remove an unwanted substring UNattached to the name.",
    function () {
      expect(delextratext("Lucy Adoption Pending", subStrings)).to.equal("lucy")
    });
  it("should remove an unwanted substring attached to front of string.",
    function () {
      expect(delextratext("Adoption pendingFabian", subStrings)).to.equal("fabian")
    });


})



