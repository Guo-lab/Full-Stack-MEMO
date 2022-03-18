// get us access to a real model
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';




// each callback function has a try and catch
export const getPosts = async (req, res) => {
    ////res.send('THIS ALSO WORKS!');
    
    try { //* retrieve all the posts we have in the database
          // find() takes time (asynchronous action)
        const postMessages = await PostMessage.find();

        //// console.log(postMessages);
        // everything is okay
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// get post and present




// With post requests to get access to, let's say, request.body
// From front-end
export const createPost = async (req, res) => {
    ////res.send('POST CREATION!');
    const post = req.body;
    // encapsulation
    const newPost = new PostMessage(post);

    try { 
        await newPost.save();

        // After saving
        res.status(201).json(newPost);

  } catch (error) {
        res.status(409).json({ message: error.message });
  }
}
//* More learning https://www.restapitutorial.com/httpstatuscodes.html











export const updatePost = async (req, res) => {
    // once we make a request
    // the request should be made to posts like /posts/123 
    // 123 is to fill the value of the id
    const { id: _id } = req.params;
    
    // do check
    if(!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).send('No post with that id');
       
    // receive post from the body from the frontend
    const post = req.body;
    // valid, then pass _id and whole updated post
    //!
    //!{ ...post, _id }
    ////const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    // send over that updated post
    res.json(updatedPost);
}