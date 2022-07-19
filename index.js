const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

var connect = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b848aaa4db1172",
    password: "5e845f03",
    database: "heroku_10248fa359e6e82"
});


app.get('/listeventparticipants', (req, res) => {
  var micro_username = req.query.username;

console.log("username: " + micro_username);

connect.getConnection(function (err, connection) {
  if (err) { res.send('Error Database Connection'); }
  else {
    var sql = "SELECT event_name, people_name FROM participant p JOIN event e ON p.event_id=e.event_id JOIN people pp ON pp.email_address=p.email_address GROUP BY event_name";
    connect.query(sql, function (err, result) {
      if (err) { throw err; }
      else {
        res.send(result);
      }
    connection.release();
    });
  }
});
});


app.get('/listpeople', (req, res) => {
  var micro_username = req.query.username;

console.log("username: " + micro_username);

connect.getConnection(function (err, connection) {
  if (err) { res.send('Error Database Connection'); }
  else {
    var sql = "SELECT * FROM people";
    connect.query(sql, function (err, result) {
      if (err) { throw err; }
      else {
        res.send(result);
      }
    connection.release();
    });
  }
});
});

app.get('/', (req, res) => {
    res.send('Salam Muafakat!');
});

app.get('/listevent', (req, res) => {
    var micro_username = req.query.username;

  console.log("username: " + micro_username);

  connect.getConnection(function (err, connection) {
    if (err) { res.send('Error Database Connection'); }
    else {
      var sql = "SELECT * FROM event";
      connect.query(sql, function (err, result) {
        if (err) { throw err; }
        else {
          res.send(result);
        }
      connection.release();
      });
    }
  });
});


app.get('/report', (req, res) => {
  var micro_username = req.query.username;

console.log("username: " + micro_username);

connect.getConnection(function (err, connection) {
  if (err) { res.send('Error Database Connection'); }
  else {
    var sql = "SELECT p.event_id, event_name, people_name, event_feedback FROM participant p JOIN event e ON p.event_id=e.event_id JOIN people pp ON pp.email_address=p.email_address GROUP BY event_id";
    connect.query(sql, function (err, result) {
      if (err) { throw err; }
      else {
        res.send(result);
      }
    connection.release();
    });
  }
});
});


app.listen(process.env.PORT, ()=> {
    console.log('App listening on port 8000!');
});
