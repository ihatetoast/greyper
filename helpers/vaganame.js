//helper fcn

//switch/case?
var getVagaName = function(str) {
  let noJunkName = str;
  if (noJunkName.length < 1) {
    console.log('empty');
    noJunkName = '';
  } else if (noJunkName.slice(0, 3) === 'DOB') {
    console.log('dob');
    noJunkName = '';
  } else if (noJunkName.slice(0, 9) === 'Sponsored') {
    console.log('spon');
    noJunkName = '';
  } else if (noJunkName.slice(0, 10) === 'Click Here') {
    console.log('click');
    noJunkName = '';
  } else {
    let nameArr = noJunkName.split('"');
    //split on quotation marks. get index 1
    noJunkName = nameArr[1];
  }
  return noJunkName;
};
// console.log(getVagaName('AMF Bet On Me "Serena"'))

module.exports = getVagaName;

/*
//deal with obj with empty names. and if obj has no keys Object.keys.length === 0 also empty string: .trim().length === 0 if i need to deal with trimming.

//this one is hell


const isEmpty = str => {
  return (
    str === undefined ||
    str === null ||
    (typeof str === 'object' && Object.keys(str).length === 0) ||
    (typeof str === 'string' && str.trim().length === 0)
  );
};

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
