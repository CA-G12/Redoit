const express = require('express');
const cookieparser = require('cookie-parser');

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
app.get('/profile/:id', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'profile.html'));
});

// app.get('/user/posts/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/userPosts.html'));
// });

app.use(router);
// router.use('/sign-in', (req, res) => {
// res.sendFile(join(__dirname, '..', 'public', 'html', 'sign-in.html'));
// });

// router.use('/signup', (req, res) => {
//   res.sendFile(join(__dirname, '..', 'public', 'html', 'signup.html'));
// });

module.exports = app;