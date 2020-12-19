const express = require('express');
const app = express();
var mysql = require('mysql');

const server = app.listen(3000, () => {
  console.log('Start Server : localhost: 3000');
});

app.use(express.static(__dirname + '/views'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'dhksthxpa12',
  database: 'openturtorials',
});

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/about', function (req, res) {
  res.send('about page');
});

app.get('/db', function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;

    connection.query('select * from author', function (error, results, fields) {
      res.send(JSON.stringify(results));
      console.log('results', results);
      connection.release();
      if (error) throw error;
    });
  });
});
