import React from 'react';
import ReactDOM from 'react-dom';

// keep track of store [global state]
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'; 

// At First
import App from './App';


// After components, Forms, Posts, Post
// For SVG bg
import './index.css';



const store = createStore(reducers, compose(applyMiddleware(thunk)));
// After create store, wrap application with a provider component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);