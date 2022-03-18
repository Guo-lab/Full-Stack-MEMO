Markdown - 
> https://blog.csdn.net/weixin_33895604/article/details/88702076?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=1  

> https://markdown.com.cn/basic-syntax/
#
# STEP 1
Create 2 folders - client (NO Capital Letter) and Server

## In Server
`npm init -y`  
Create index.js and import  
`npm install body-parser cors express mongoose nodemon`  
Add "type" to package.json

## In client
`npx create-react-app ./`
`npm install axios moment react-file-base64 redux redux-thunk`


Create a new src folder and index.js file  
Import things  
Create App.js (root)

# 

# STEP 2
## In Server
Connect Database in index.js    

After connecting to database, create routes (routes folder)  

In routes, create posts.js  

Inside posts.js, add all the routes and then import routers in index.js  

Go to localhost:5000/posts and find that without running port  
> **Add IP Address -- [0.0.0.0/0]**  
  
and it'll work

#
# STEP 3
## In Server
Create Controller folder to make the whole backend application stable
> REASON: In routes, posts.js can not deal with complex logic  

> To Simplify, extract all the functions and logic form the routes to posts in the controllers  

#
# STEP 4
## In Server
Create a new folder [models]  
Create mongoose model in postMessage.js

#
# STEP 5
## In Server
Add more routes into the controller/posts.js  
Finish getPosts logic  
Finish createPost logic and move on to the front-end side to create a form  

**THEN, focus more on client and logic for sending and creating posts**

#
# STEP 6 
## Create a whole skeleton for the front-end application
`npm install @material-ui/core`  


Then, create 2 components  
In Posts folder, Post folder turns medium one to large applications (If only one component uses some other component)  

#
# STEP 7
## Start with App.js  
import from material-ui/core  and build the basic structure  

Create a images folder

### In App.js  
Container is to make sure to send everything  
Grow is to add some simple animation

Some icons Reference:  
> https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=39034  

> <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>

**In Grid:**   
xs={12} means on extra small devices TAKE the full width  
sm={7} means on small or larger devices 7 out of 12 spaces  

2 Grids correspond to Posts and Form

#
# STEP 8 
## POSTS POST FORM

#
# STEP 9
## Styles
Get Styles from https://gist.github.com/adrianhajdin/d99aaa67124f0de7667fd3937715fb26  

After Add className with styles => **Much Better**

Same as other three js files [ ALT + Command + C ]

#
# STEP 10 
## Start implementing the calls to the api
Redux : TO DO all actions towards backend
## In client/src 
A new folder api, inside create index.js  
A new folder actions, inside create posts.js  
A new folder reducers, inside create posts.js and index.js  
## In src 
index.js is where to initialize redux  
Create store and implement reducers

After Provider Wrapping, be able to use all of its capabilities

#
# STEP 11
## In App.js 
Dispatch getPosts actions
To simplify Pre-hook [https://www.jianshu.com/p/3382cc765b39], with use of hooks, use redux  

Next, create an action  

Then, export getPosts from actions (folder)  

In actions/posts.js  

`import * as api from '../api'; `  
`// Action Creators`  
`const getPosts = () => {`  
`   const action = { type: 'FETCH_ALL', payload: [] }`  
`    return action;`
`}`
After finishing actions/posts.js, use it in App.js

#
# STEP 12
Retrieve the data from within components
Go to Post component: Posts.js
## In Posts/Post/Posts.js
Fetch the data from global redux store

If F12 in console

> Array []

> Network Error

To change this,   
- in package.json, Add proxy
- in Server, index.js, Change the order of app.use(routes)
- `npm start (Server)` and `npm start (client)`

Get 2 Array []  
First is what I set up in the reducer  
Second is that is after the data has been fetched  
**the Get Request works!**  

#
# STEP 13
## Form
To make a post request to database and add new posts  
## In Form/Form.js
Pay attention:  
`onChange={(e) => setPostData({ creator: e.target.value })}`  
should spread the post data
ONLY change the specific property     
`onChange={(e) => setPostData({ ...postData, creator: e.target.value })}`    
To learn it, visit
[mem.dev](https://mem.dev/)  

Form: TextField, FileBase and Button  
For margin,     
`<form autoComplete='off' noValidate className={'${classes.root} ${classes.form}'【''->``】} onSubmit={handleSubmit}>`

#
# STEP 14
Add a new post into database connected to server
## client/src/api/index.js
export createPost 
## client/src/actions/posts.js
finish createPost






---
***
***


#
# STEP 15
## In components/Posts/Posts.js
DO something with posts
- CircularProgress as a loading spinner 
- In Grid, posts.map()
## In components/Posts/Post/Post.js
- `import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';`
- `import ThumbUpAction from '@material-ui/icons/ThumbUpAlt';`
- `import DeleteIcon from '@material-ui/icons/Delete';`
- `import MoreHorizIcon from '@material-ui/icons/MoreHoriz';`

Hashtag sign #`$`{}  

DONE BUT
THEN, WARNING and ERROR  

FOR WARNING:
> https://stackoverflow.com/questions/64319184/failed-prop-type-material-ui-either-children-image-src-or-component  

> https://github.com/mui/material-ui/issues/11702

√

FOR ERROR:
> https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html  

> https://reactnative.dev/docs/upgrading

**X** be not working  
I find I can provide CodeSandbox in the future
just like  
https://codesandbox.io/s/dazzling-cori-p0jj6

Then,
> https://bryantson.medium.com/reactjs-how-to-handle-invalid-hook-call-warning-uncaught-error-invalid-hook-call-49ca32aa0d14

However, **X** again
Eventually, Fix it with `npm audit fix --force`...  

√  
I guess some dependencies had been wrong!  

Then, 
> Warning: Failed prop type: Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.
OK

## A BUG: NO PHOTO
## In ./client/src/components/Form/Form.js
√  

Wrong Spelling !
This is also why I got this warning before.   
> https://stackoverflow.com/questions/64319184/failed-prop-type-material-ui-either-children-image-src-or-component  





















#
# STEP 16
## In client/src 
Create index.css for SVG bg
> https://www.svgbackgrounds.com/




#
# STEP 17
Update Load
## In Server/routes/posts.js
patch() for updating  
and 
## In controllers/posts.js
finish the logic for updatePost

#
# STEP 18
## For client side
## TO components 
- Form (where we deal with the update logic)
- Get the current id of the post we're on

- '... is under the post component'
- Posts/Post/Post.js and App.js

> Why in App.js? Because of sharing of current id between the posts and the form AND App.js is ONLY the parent to both Posts and Form

> Without redux, we send over to both components
- After fixing both Post and Posts and Form
- GOTO reducers to fix reducers/posts.js


#
# STEP 19
Update the fields o the Form  
We want the data with values already in there 
## Form/Form.js
Fetch a new post  
With Selector and UseEffect to populate the values  
(REFRESH the page)

#
# STEP 20
Also, after updating the post, initiate another getPost request
1. Creating -> Editing
2. Click SUBMIT, then, clear all the inputs -> CLEAR function in Form.js
Now, after editing, refresh the page and then the post is going to change  
However, emptying values, immediately reset posts ! NO NEED to refresh actually  
So In **App.js** change useEffect()  

Let show TITLE

Now a new BUG: without importing **mongoose** in controllers/posts.js and without updating **{ ...post, _id }**

- Wait, a small delay about several seconds
# TIPS : Console log error instead of error.message to get more information  



# STEP 13

#
# STEP 13

#
# STEP 13

#
# STEP 13

#
# STEP 13



Plus, I found this: 
> https://www.freemote.com/watch-strategy-funnel
Actually, I just had one experience to make website to meet the need of business. A POINT to IMPROVE !
