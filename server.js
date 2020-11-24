var express = require('express');
var app = express();

var logger = require('./logger');

app.use(logger);

app.use(express.static('public'));

// app.get('/', function (req, res, next) {
//   console.log("== received GET request for /");
//
//   var content = "<html>";
//   content += "<body>";
//   content += "<h1>Welcome to our home page!</h1>";
//   content += "</body>";
//   content += "</html>";
//
//   res.status(200).send(content);
// });

app.get('/cats', function (req, res, next) {

  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our cats page!</h1>";
  content += "</body>";
  content += "</html>";

  res.status(200).send(content);
});

var availablePeople = [
  'rey',
  'luke',
  'leia',
  'finn',
  'r2d2'
];
app.get('/people/:person', function (req, res, next) {
  console.log("  -- req.params:", req.params);
  var person = req.params.person.toLowerCase();

  if (availablePeople.indexOf(person) !== -1) {
    var filePath = __dirname + '/public/people/' + person + '.html';
    console.log("  -- filePath:", filePath);
    res.status(200).sendFile(filePath);
  } else {
    next();
  }

});

app.get('/people', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/people.html');
});

// app.post();
// app.patch();

app.get('*', function (req, res, next) {

  // var content = "<html>";
  // content += "<body>";
  // content += "<h1>404</h1>";
  // content += "</body>";
  // content += "</html>";
  //
  // res.status(404).send(content);
  res.status(404).sendFile(__dirname + '/public/404.html');

});

app.listen(8000, function () {
  console.log("== server listening on port 8000");
});
