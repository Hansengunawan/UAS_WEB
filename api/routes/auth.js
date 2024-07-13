const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
var router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tugasweb',
    password: 'tugaswebpass',
    database: 'cityrescue'
});

const app = express();

app.post('/auth', function(request, response) {
    let user = request.body.username;
    let pass = request.body.password;
    if (user && pass) {
        connection.query('SELECT * FROM users WHERE userID LIKE ? AND password LIKE ?', [user, pass], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = user;
                response.redirect('http://localhost:3000/data-insiden');
            }
            else {
                response.send('Incorrect login credentials.');
            }
            response.end();
        });
    }
    else {
        response.send('Please enter your username and password.');
        response.end();
    }
});

app.listen(9000);

module.exports = router;
