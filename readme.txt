Nodemon - package is used to update server without restarting

MongoDB is NoSQL db management system.
mongoose.connect is used to connect to server and in password,@ is special keyword so if we want to use @ => %40 is used inplace 

.env file is used to hide important info like password which we dont want to share on GITHUB . npm i dotenv 
-------------------------------------------------------------------------------------------

UserSchema is created in model which defines how our user schema is. and what require fields are stored...

User = mongoose.model(it takes a  User and UserSchema which we created.'User' automatically changes to 'Users' in mongoose.model to apply schema to every user present)

app.get('/test',(req,res)) is api call and it takes two parameters file and req is used to send data to api and res is the response that comes from api.
and res.json() is used to print message 

we created a routes from user knows as user.routes where we are import express and using router.get() 
in Index.js, we are importing router and to use , we want to use app.use() method as get is already done by userRoute

Express is a node js web application framework that provides broad features for building web and mobile applications. 
It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

----------------------------------------------------------------------------------------
Now, we create a auth.controller which authenicate our signup field, signup will be a async function means we have 
to store values and it take time so without going in event loop ,it can run in background
we are destructing the contents from req.body which we send.we are encrypting our password so no one can see 
using bcryptjs lib ..Creating a newUser and saving using Try catch block so if error occur it can be shown on web

signup function is again imported in auth.route to create to route  is used to define a route for handling HTTP POST requests.
HTTP POST requests are commonly used to submit data to a server, often to create or update a resource.

The app.use(express.json()) middleware is used to parse incoming request bodies with JSON payloads in an Express.js application.TO access,we convert incoming
json into Js objects (here, req.body is converted into js object by express)
-------------------------------------------------------------------------------------------------------------

In app, we are using a middleware to show error (err,req,res,next) . where we get statusCode = err.statusCode || 500 meaning if undetified error
then set it 500.same for message.response.status will give status of code and convert it into json to show on web

We are making error.js to handle middleware function where exporting errorHandler
and creating error from Error class which can find statusCode and message as parameter given and returning error

In authController, we are rather than showing status in catch, we are just passing error to next
where handling can be done(in index.js)

--------------------------------------------------------------------------------------------------------------

Today, we are updating SignUp page . In vite.config.js, we have to change our server as api is on localhost:3000 so
server : { here proxy is defined and when we get '/api' then set target to http://localhost:3000 from previous and as it is http which is not secure so secure is false}

Now,we are providing functionality to sign up form. 
State Variables -  formData: Holds the current state of the form data.
                   errorMessage: Stores any error messages to be displayed to the user.
                   loading: Indicates whether a signup request is in progress.

we have handleChange function which  any change in input understands.
handleSubmit is an async funtcion means it takes sometimes to update data in db.
Sends a POST request(used to submit data) to the /api/auth/signup endpoint with the form data.
Processes the server response:
If data.success is false, sets the error message.
If the response is successful (res.ok), navigates the user to the sign-in page.


--------------------------------------------------------------------

Now, we are making a signin route where we are confirming signin.
in try block, we are using await function for gettinf info from User.findOne({email}) which is checking email from MongoDB
now we are checking validPassowrd by comparing hashvalue of saved passowrd in db from password we are signing in
then we are generting a sign in token which can be saced in cookie and then we are asiding password from rest of data using validUser._doc
now we are sending response with status and cookie 

bcryptjs: Used for comparing hashed passwords.
jsonwebtoken: Used for generating access tokens.

--------------------------------------------------------------------
Now we created our SignIn page and to handle state globally,we used Redux toolkit.we first create a store
which store info and reducers.
A userSlice.js is created in which initial state and userSlice is defined. createSlice takes 3 things: name,initialState,and actions to be performed
signInStart initials the currentState, success - takes state and action where action is dispatched when success sigi in but payload stores inforamtion
which action passes.
Now userSlice.reducer will be used by store.js and userSlice.actions are the reducer functionality which we used in our componenets.

Action Creators: Extracted and exported to be used for dispatching actions related to user sign-in.
Reducer: Exported as the default export to be included in the Redux store configuration.

In Sign In ,we are handling state using globally 
API Request: Sends a POST request to /api/auth/signin with the formData in the request body.
Response Handling:
            Parses the response as JSON.(as formData is jsObject ,we need to parse this as json to web)
            If the success field in the response is false, dispatches signInFailure with the error message from the response.
            If the request is successful (res.ok), dispatches signInSuccess with the response data 
            and navigates to the home page ('/').

--------------------------------------------------------------------------------------------------------------------