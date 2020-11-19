var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
  console.log("== received GET request for /");

  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our home page!</h1>";
  content += "</body>";
  content += "</html>";

  res.status(200).send(content);
});

app.get('/cats', function (req, res, next) {
  console.log("== received GET request for /cats");

  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our cats page!</h1>";
  content += "</body>";
  content += "</html>";

  res.status(200).send(content);
});

// app.post();
// app.patch();

app.get('*', function (req, res, next) {
  console.log("== 404");

  var content = "<html>";
  content += "<body>";
  content += "<h1>404</h1>";
  content += "</body>";
  content += "</html>";

  res.status(404).send(content);
});

app.listen(8000, function () {
  console.log("== server listening on port 8000");
});
