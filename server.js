const express = require('express');
const hbs = require('hbs');
const app = express();

//cofigura variable de entorno
const port = process.env.PORT || 3000;

//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');



//sirve contenido estástico
app.use( express.static('public'));

//Rutas
app.get('/blog', function (req, res) {
    res.render('blog', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/blogs', function (req, res) {
    res.render('blogs', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/dailyimagen', function (req, res) {
    res.render('dailyimagen', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/', function (req, res) {
    res.render('index', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/perfil', function (req, res) {
    res.render('perfil', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/post1', function (req, res) {
    res.render('post1', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/post2', function (req, res) {
    res.render('post2', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.get('/post3', function (req, res) {
    res.render('post3', {
      titulo: "AtroBlog by Lucas Gebhardt"
    })
  });

app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});

