

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//point server to routes:
require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: ", PORT);
})