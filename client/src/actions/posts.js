import * as api from '../api';


//# Action Creators
// Working with asynchronous data 
// To fetch all the posts
// USE redux thunk (additional arrow function)
//# Because imported in App.js, export this function  here
export const getPosts = () => async (dispatch) => {
    
    try {  //* try to fetch all the data from the api
        ////const response = await api.fetchPosts();   
        const { data } = await api.fetchPosts();
        
        //* dispatch an action from the data from backend
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }

    //* Move just into try {}
    // const action = { type: 'FETCH_ALL', payload: [] }

    ////return action;
    // dispatch(action);

}



export const createPost = (post) => async (dispatch) => {
    
    try {
        //* destructure the data from the response
        const { data } = await api.createPost(post); //*  post api request to backend server

        dispatch({ type: 'CREATE', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}








export const updatePost = (id, post) => async (dispatch) => {
    
    try {
        //* making the api request to update the post
        const { data } = await api.updatePost(id, post); //*  return updated memory or the post // destructure the response

        dispatch({ type: 'UPDATE', payload: data });
        // Then, GOTO reducers to fix type !
        
    } catch (error) {
        console.log(error.message);
    }
}
// % redux
// % have actions types set as constants and then import them  in these files
// % √

export const likePost = (id) => async (dispatch) => {
    
    try {
        // just like it, without providing what we want to do with it
        const { data } = await api.likePost(id);

        dispatch({ type: 'LIKE', payload: data });
        // Then, GOTO reducers to fix type !
        
    } catch (error) {
        console.log(error);
    }
}






export const deletePost = (id) => async (dispatch) => {
    
    try {
        //* no need to pass any data
        await api.deletePost(id); 
        // no need to response
        dispatch({ type: 'DELETE', payload: id });
        // Then, GOTO reducers to fix type !
        
    } catch (error) {
        console.log(error);
    }
}