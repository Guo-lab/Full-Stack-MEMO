import React from 'react';

import Post from './Post/Post';

import useStyles from './styles';

// fetch data from global redux store
import { useSelector } from 'react-redux';

const Posts = () => {
    // Selector as HOOK
const posts = useSelector((state) => state.posts); // * in reducers/index.js

    const classes = useStyles();

    console.log(posts);
    
    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;