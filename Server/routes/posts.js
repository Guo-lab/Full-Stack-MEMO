import express from 'express';

const router = express.Router();


//  add a prefix of posts to all routes in here
//  http://localhost:5000/posts


//! Make this file clear
import { getPosts, createPost, updatePost } from '../controllers/posts.js'

// 
//! always have request and response
/*router.get('/', (req, res) => {
    res.send('THIS WWORKS!');
});
*/
router.get('/', getPosts);
router.post('/', createPost);

// id [be dynamic]
router.patch('/:id', updatePost);
// import that from the controllers




export default router;
