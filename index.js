const express = require('express');
const hbs = require('hbs');
const app = express();
// const path = require('path') este no iría con

const port = process.env.PORT || 3000;

//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');



//rutas para servir contenido estástico
app.use( express.static('public'))

app.get('/blog', function (req, res) {
    res.render('blog')
  });

app.get('/blogs', function (req, res) {
    res.render('blogs')
  });

app.get('/dailyimagen', function (req, res) {
    res.render('dailyimagen')
  });

app.get('/', function (req, res) {
    res.render('index')
  });

app.get('/perfil', function (req, res) {
    res.render('perfil')
  });

app.get('/post1', function (req, res) {
    res.render('post1')
  });

app.get('/post2', function (req, res) {
    res.render('post2')
  });

app.get('/post3', function (req, res) {
    res.render('post3')
  });

app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});