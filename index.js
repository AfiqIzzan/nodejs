const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Salam Muafakat!');
});

app.get('/johor', (req, res) => {
    var micro_username = req.query.username;

  console.log("username: " + micro_username);

  connect.getConnection(function (err, connection) {
    if (err) { res.send('Error Database Connection'); }
    else {
      var sql = "SELECT * FROM mosquemanagement";
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

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});