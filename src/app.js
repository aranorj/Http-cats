var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var index = require(path.join(__dirname,'index.routes'));

var indexRouter = index;
var app = express();

//recursos estáticos
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

// view engine setup
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//catch y foward para error 404
app.use(function(req, res, next) {
  next(createError(404));
});

//404 handler 
app.use(function(err, req, res, next) {
  if (err.status === 404) {
    res.status(404).render('error', {error: err});
  } else {
    next(err);
  }
});

const port = process.env.PORT || 3200;

app.listen(port, ()=>{
  console.log(`Escuchando por el puerto ${port}`)
});

module.exports = app;
