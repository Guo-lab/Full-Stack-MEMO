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
             
        default:
            return posts;
    }

}