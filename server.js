const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/scripts', express.static(path.join(__dirname, 'app/public/scripts')));
// app.use('/css', express.static(path.join(__dirname, 'app/public/css')));

//point server to routes, toots:
//GENERAL /api ENDPOINT
require("./app/routing/apiRoutes")(app);
//STATE ENDPOINTS
require("./app/routing/apiRoutes/txApiRoutes")(app);
require("./app/routing/apiRoutes/vaApiRoutes")(app);
//HTML
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: ", PORT);
})