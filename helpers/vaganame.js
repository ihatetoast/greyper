//helper fcn

//switch/case?
var getVagaName = function (str) {
  let noJunkName = str;
  if (noJunkName.length < 1) {
    console.log("empty");
    noJunkName = '';
  }
  else if (noJunkName.slice(0, 3) === "DOB") {
    console.log("dob");
    noJunkName = '';
  }
  else if (noJunkName.slice(0, 9) === "Sponsored") {
    console.log("spon");
    noJunkName = '';
  }
  else if (noJunkName.slice(0, 10) === "Click Here") {
    console.log("click");
    noJunkName = '';
  }
  else {
    let nameArr = noJunkName.split('\"');
    //split on quotation marks. get index 1
    noJunkName = nameArr[1]

  }
  return noJunkName;
}
// console.log(getVagaName('AMF Bet On Me "Serena"'))

module.exports = getVagaName;

/*
THE PROBLEM: 
nameData: "AMF Bet On Me "Serena"DOB: 7/12/2014 Gender: Female Color: Black Weight: 61 Home Acclimated: NoSponsored by:Click Here to Sponsor Me"
},
{
nameData: ""
},
{
nameData: ""
},
{
nameData: ""
},
{
nameData: "AMF Bet On Me "Serena"DOB: 7/12/2014 Gender: Female Color: Black Weight: 61 Home Acclimated: NoSponsored by:Click Here to Sponsor Me"
},
{
nameData: "AMF Bet On Me "Serena""
},
{
nameData: "DOB: 7/12/2014 Gender: Female Color: Black Weight: 61 Home Acclimated: No"
},
{
nameData: "Sponsored by:"
},
{
nameData: "Click Here to Sponsor Me"
},
{
nameData: ""
},
{
nameData: ""
},
{
nameData: ""
},


*/