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