

$(document).ready(function () {
  console.log("script file is heard. doco is reado!");
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var d = new Date();
  var day = d.getDate();
  var mon = months[d.getMonth()];
  var year = d.getFullYear();

  console.log(d);
  $("#dateNow").text(`${day} ${mon} ${year}`)

});