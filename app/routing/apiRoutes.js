import { yoYoMa } from "../../helpers/helpers";
module.exports = function (app) {


  app.get("/api", function (request, response) {
    response.send(`
    <h1>Greyper</h1>
    <ul>
    <li>Greyhound Adoption League of Texas: /api/galt</li>
    <li>Greyhound Adoption League of Texas - Central Texas: /api/centex</li>
    <li>Virginia Greyhound Adoption (with GPA Greater Orlando): /api/vaga</li>
    </ul>
    `)
    console.log(yoYoMa());
  });

}

