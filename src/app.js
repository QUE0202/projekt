const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/particals'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona działa");
    res.render('index', {});
});

app.get('/omnie', (req, res) => {
    res.send("Strona działa");
});

app.get('/kontakt', (req, res) => {
    res.send("Strona działa");
});

app.listen(5000, () => {
    console.log("Serwer działa");
});