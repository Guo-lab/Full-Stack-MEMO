import React, { useEffect } from 'react';

import useStyles from './styles';


import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useState } from 'react';
    
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';



// After Update Post in the Server side
//* GET THE CURRENT ID
// After implement the currentId, setCurrentId in App.js
// Give the params into Form = () => {}

// When receiving the change of currentId from Post.js
// Add "if" in handleSubmit()
import { updatePost } from '../../actions/posts';
// Then GOTO actions and api (actions use it)




// fetch a new post
// For Give previous values to Form
import { useSelector } from 'react-redux';



const Form = ({ currentId, setCurrentId }) => {

    const classes = useStyles(); 

    const [postData, setPostData] = useState({
        creator: '', title: '', message: {}, tags: '', selectFile: ''
    });




    const dispatch = useDispatch();

    // handler function
    const handleSubmit = (e) => {
        // send over a post request with all the data that user typed in
        e.preventDefault();

        if(currentId) {
            // not null dispatch sth different
            dispatch(updatePost(currentId, postData));
            clear();
        }
        else {
            dispatch(createPost(postData));
            clear();
        }
    } 
    //* Then, GOTO the reducers/posts.js





    //* in reducers/index.js
    // return one singular thing
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null); 
    // with a callback function and a dependency array
    // what functions should be run when what changes
    useEffect(() => {
        if(post) 
            setPostData(post);
    }, [post]);




    // Click SUBMIT, then, clear all the inputs
    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title: '', message: {}, tags: '', selectFile: ''
        });
    }
    // Also should be called after Click SUBMIT
    //! ALT edit at the same time




    return(
        ////<h1>FORM</h1>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                
                <Typography variant='h6'>
                    {currentId ? 'Editing' : 'Creating'} a MEMO
                </Typography>
                
                <TextField name='creator' 
                        variant='outlined' 
                        label="Creator" 
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name='title' 
                        variant='outlined' 
                        label="Title" 
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField name='message' 
                        variant='outlined' 
                        label="Message" 
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField name='tags' 
                        variant='outlined' 
                        label="Tags" 
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                <div className={classes.fileInput}>
                    <FileBase 
                        type='file' 
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 }) }
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color='primary' size="large" type='submit' fullWidth>Submit</Button>
                <Button variant="contained" color='secondary' size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;