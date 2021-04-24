const express = require('express');
const next = require('next');
var mysql = require('mysql');
require('dotenv').config;
var connection = mysql.createConnection(process.env.JAWSDB_URL);
    
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
    
app.prepare()
.then(() => {
  const server = express();

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
  });

  connection.end();
    
  server.get('*', (req, res) => {
    return handle(req, res);
  })
    
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})