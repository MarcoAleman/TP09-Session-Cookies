const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieColor = require('./middlewares/cookieColor');

/* Enrutadores */
const mainRouter = require('./routes/main');

/* Middlewares */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded( { extended : false}));
app.use(session({
    secret: 'Practica',
    resave: false,
    saveUninitialized: true,
    }));
app.use(cookieParser());
app.use(cookieColor); //implemento la cookie se sesion a nivel aplicacion.

/* Rutas */
app.use('/', mainRouter);

const PORT = 3100;
app.listen(PORT, ()=> console.log(
    `
    Puerto levantado
    http://localhost:${PORT}
    `
))