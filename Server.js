var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var uuid = require('uuid');


app.use(express.static("webapp"));

app.get('/', function (req, res) {
    res.redirect('/');
});

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/save-response', function(req, res, next){

  //generates a random id for the participant's response
  var respId = uuid.v1()

  //data to be saved (participant's response)
  var row = [respId, req.body.startTime, req.body.endTime, req.body.gender, req.body.age, req.body.testType, req.body.pretestPoints, req.body.activityPoints, req.body.posttestPoints, req.body.pre, req.body.post].join(";")+"\n"

  fs.stat('responses.csv', function (err, stat) {
      if (err == null) {
          //write the actual data and end with newline
          fs.appendFile('responses.csv', row, function (err) {
              if (err) throw err;
              console.log('The response was saved!');
          });
      }
      else {
          //write the headers and newline
          console.log('First answer, adding headers');
          var headers= ["responseId", "startTime","endTime","gender","age","testType","anxietyPre","activityPoints","anxietyPost","anxietyRawPre","anxietyRawPost"].join(";") + "\n" + row

          fs.writeFile('responses.csv', headers, function (err) {
              if (err) throw err;
              console.log('Response saved!');
          });
      }
  });

  res.end()

});

app.listen(8080, 'localhost');
console.log("This project is listening on port 8080");
