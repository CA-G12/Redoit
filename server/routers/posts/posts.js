const router = require('express').Router();
const authrise = require('../../middlewars/authorize');
const addpost = require('../../controllers/posts/addpost');
const deletepost = require('../../controllers/posts/deletepost');
const getPosts = require('../../controllers/posts/getposts');
const upvote = require('../../controllers/posts/upvote');
const getPostsForUser = require('../../controllers/posts/getpostsforuser');

router.post('/addpost', authrise, addpost);
router.post('/upvote', authrise, upvote);
router.get('/deletepost/:id', authrise, deletepost);
router.get('/getposts', getPosts);
router.get('/getpostsforuser/:id', getPostsForUser);

module.exports = router;
