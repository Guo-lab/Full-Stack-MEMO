import express from 'express';

const router = express.Router();


//  add a prefix of posts to all routes in here
//  http://localhost:5000/posts


//! Make this file clear
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

// 
//! always have request and response
/*router.get('/', (req, res) => {
    res.send('THIS WORKS!');
});
*/
router.get('/', getPosts);
router.post('/', createPost);


// id [be dynamic]
router.patch('/:id', updatePost);
// import that from the controllers


router.delete('/:id', deletePost);


// like post is just an update Post
router.patch('/:id/likePost', likePost);



export default router;
