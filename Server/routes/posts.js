import express from 'express';

const router = express.Router();


//  add a prefix of posts to all routes in here
//  http://localhost:5000/posts


//! Make this file clear
import { getPosts, createPost} from '../controller/posts.js'

// 
//! always have request and response
/*router.get('/', (req, res) => {
    res.send('THIS WWORKS!');
});
*/
router.get('/', getPosts);
router.post('/', createPost);





export default router;
