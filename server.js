const express = require('express');
const app = express();
const port = 5000;

const posts = require('./posts');
const loggerMiddleware = require('./loggerMiddleware');

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

    app.get('/users/:userId', (req, res) => {
        const userId= Number(req.params.userId);
        const userPosts = posts.filter(post => post.userId === userId);
        res.json(userPosts);
    });

    app.get('*', (req, res) => {
    res.redirect('/');
    });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });

    const mysql= require('mysql');

    const connection = mysql.createConnection({
        host: '127.0.0.1', 
        user: 'root',
        password: 'root',
        database: 'practice_database'
    });

    connection.connect((err) => {  
        if (err) {
            console.log('Error connecting to Db' + err.stack);
            return;
        }

        console.log('Connection as: ' + connection.threadId);
    });


    connection.query('SELECT * FROM users', 
    function (err,results, fields) {
        if (err) throw err;
        console.log(results);
        console.log(fields);
    });

    connection.end();

    