import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Use import instead of THIS :
//// const express = require('express');


import postRoutes from './routes/posts.js';


// initialize this app
const app = express();


// After routes
// every route inside the post routes starts with /posts
//! routes should be after cors
////app.use('/posts', postRoutes);





// setting up the body parser [send requests]
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());



app.use('/posts', postRoutes);




// https://www.mongodb.com/cloud/atlas
// host our database on their cloud

const CONNETION_URL = 'mongodb+srv://gsq:gsq123@cluster0.orecb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// avoid WARNINGs in the console
mongoose.connect(CONNETION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//// mongoose.set('useFindAndModify', false);

