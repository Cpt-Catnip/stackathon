const path = require('path');
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 1337;
const app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
