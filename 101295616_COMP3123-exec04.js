const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.send('<h1>COMP3123 - Exec04</h1>');
})

app.post('/', (req,res) => {
    res.send('<h1>POST COMP3123 - Exec04</h1>');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

// return "Hello express"

app.get('/hello', (req, res) => {
    res.send("<h1>Hello express</h1>");
})

// query string parameters
app.get('/user/', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;

    res.send({firstname, lastname});
})

// path parameter
app.post('/user/:firstname/:lastname', (req,res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.send({firstname, lastname});
})
