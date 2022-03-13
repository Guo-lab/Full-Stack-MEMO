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
Start App.js


