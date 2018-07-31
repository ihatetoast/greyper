var path = require("path");

module.exports = function (app) {
  //result? where photos will be loaded
  app.get("/hounds", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/hounds.html"));
  });
  //catch all: point to index
  app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
