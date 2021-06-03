const express = require('express')

const app = express()
const path = require('path')

app.listen(3000, () => {
    console.log('Aplicación corriendo en el puerto 3000')
    })

//rutas
app.get("/blog", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/blog.html'))
    })

app.get("/blogs", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/blogs.html'))
    })

app.get("/dailyimagen", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/dailyimagen.html'))
    })

app.get("/", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/index.html'))
    })

app.get("/perfil", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/perfil.html'))
    })

app.get("/post1", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/post1.html'))
    })

app.get("/post2", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/post2.html'))
    })

app.get("/post3", (request, response) => {
    response.sendfile(path.resolve(__dirname, 'paginas/post3.html'))
    })

