const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
