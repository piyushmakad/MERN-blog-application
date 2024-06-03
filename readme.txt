Nodemon - package is used to update server without restarting

MongoDB is NoSQL db management system.
mongoose.connect is used to connect to server and in password,@ is special keyword so if we want to use @ => %40 is used inplace 

.env file is used to hide important info like password which we dont want to share on GITHUB . npm i dotenv 

UserSchema is created in model which defines how our user schema is. and what require fields are stored...

User = mongoose.model(it takes a  User and UserSchema which we created.'User' automatically changes to 'Users' in mongoose.model to apply schema to every user present)

app.get('/test',(req,res)) is api call and it takes two parameters file and req is used to send data to api and res is the response that comes from api.
and res.json() is used to print message 

we created a routes from user knows as user.routes where we are import express and using router.get() 
in Index.js, we are importing router and to use , we want to use app.use() method as get is already done by userRoute

Express is a node js web application framework that provides broad features for building web and mobile applications. 
It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.