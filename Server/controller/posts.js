// get us access to a real model
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