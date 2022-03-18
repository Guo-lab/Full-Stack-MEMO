import React from 'react';

import Post from './Post/Post';

import useStyles from './styles';

// fetch data from global redux store
import { useSelector } from 'react-redux';


import { Grid, CircularProgress }  from '@material-ui/core';


// After implement the currentId, setCurrentId in App.js
// Give the param into Form = () => {}

//* Props drilling
//<Post post={post} setCurrentId={setCurrentId} />
//* Redux can solve
// Now GOTO Post.js

const Posts = ({ setCurrentId }) => {
    // Selector as HOOK
    const posts = useSelector((state) => state.posts); // * in reducers/index.js

    const classes = useStyles();

    console.log(posts);
    
    return(
        ////<>
        ////    <h1>POSTS</h1>
        ////    <Post />
        ////    <Post />
        ////</>
        //* if there is no posts, return CircularProgress
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )  
    );
}

export default Posts;