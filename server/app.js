const express = require('express');
const cookieparser = require('cookie-parser');
require('dotenv').config();
const { join } = require('path');
const router = require('./routers');

const app = express();
app.set('port', process.env.port || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static(join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/index.js'));
});
app.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'signup.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'login.html'));
});
app.get('/profile/:id', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'profile.html'));
});

app.use(router);

module.exports = app;
