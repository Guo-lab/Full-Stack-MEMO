
// state is an array
export default (posts = [], action) => {
    
    switch (action.type) {
        case 'FETCH_ALL':
            //// return state;
            //// return posts;
            return action.payload;
        case 'CREATE':
            ////return posts;
            // send over an array of posts
            return [...posts, action.payload];
        
        case 'UPDATE': 
            // array.map() is an array 
            // a ternary expression
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        
        case 'DELETE': 
            // return all posts except the one we do not need 
            // payload is an id
            return posts.filter((post) => post._id !== action.payload);
             
        default:
            return posts;
    }

}