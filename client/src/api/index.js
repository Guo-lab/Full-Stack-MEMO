import axios from 'axios';

// Pointing to backend route
const url = 'http://localhost:5000/posts';

// 5000/posts returns all the posts that we currently have in the database
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const deletePost = (id) => axios.delete(`${url}/${id}`);


