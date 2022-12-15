var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/activadad', function (req, res) {
  res.send('muchas activades para que disfrutes!')
})
app.get('/asistencia', function (req, res) {
  res.send('en esta parte de ayudaremos con el problema que tengas')
})

app.get('/home', function (req, res) {
  res.send('soy la pagina principal')
})
app.route('/book')
  .get(function (req, res) {
    res.send('consigue un libro al azar');
  })
  .post(function (req, res) {
    res.send('agregar un libro');
  })
  .put(function (req, res) {
    res.send('actualiza un libro');
  });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
