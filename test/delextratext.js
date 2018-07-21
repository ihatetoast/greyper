var expect = require("chai").expect;
var delextratext = require("../helpers/delextratext.js");

//add to as i find substrings

describe("Delete extra text", function () {
  it("should remove an unwanted substring attached to the name.",
    function () {
      expect(delextratext("YUKONAdoption Pending", "Adoption Pending")).to.equal("yukon")
    });
  it("should remove an unwanted substring UNattached to the name.",
    function () {
      expect(delextratext("Lucy Adoption Pending", "Adoption Pending")).to.equal("lucy")
    });
  it("should remove an unwanted substring attached to front of string.",
    function () {
      expect(delextratext("Adoption pendingFabian", "Adoption Pending")).to.equal("fabian")
    });

})



