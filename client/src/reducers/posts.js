import { CallToActionSharp } from "@material-ui/icons";

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
            return posts.map((post) => post._id == action.payload._id ? action.payload : post);
             
        default:
            return posts;
    }

}