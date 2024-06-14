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
To save the sign in state locally in storage,we use redux-persist
combineReducers are used to combine no. of reducers in a single root.Configuring persist object 
where key = root ,storage which is imported from redux-persist and version 1.Now we are Creating
a persistedReducer which take persistConfig and root reducer as arguments -- 
           persistReducer: Enhances the root reducer to automatically persist and rehydrate the state.

we are configuring store with reducer and middleware if any eroor happens to handle efficiently.Then export store using
persistStore -- Creates a persistor object which controls the persistence behavior. 

PersistGate is a component provided by redux-persist that delays the rendering of your app's UI 
until the persisted state has been retrieved and rehydrated

-----------------------------------------------------------------
Now we need to create Google Authentication so first firebase is installed with default config and export the app.
we create an const auth to getAuth(app) .here GoogleAuthProvider()  creates GoogleAuth instance.SetcustomPararmeter is used to
select from prompt only select_account option. SignInWithPopUp() creates a pop up windows.
await res.json(): The response object (res) has a method .json() that returns a promise. This promise resolves with the result of 
parsing the response body text as JSON.

In AuthController,we are defining gooleRoute and export const googleAuht method in controller which is an async function. If block is checking whether user is found .If not 
then, we generate a randomPassowrd from no. and alphabets.Now a hashpassword of generatedPassword is created .Then new User is created with username based on name and no.
email,hashpassword,photoUrl,etc .Then await is called for newUSer to be saved in db .Then token is created , password  is removed from rest to show in web .then catch block is
created.

--------------------------------------------------------------------------------------------------------------------------
we have now created functionality for theme and dropdown when sign in to show profile info.In Header,
We use dropdown to show a dropdown menu with label as avator photo. In this,a dropdown.header is used which show username,email.
After that a link is assigned when clicked to Profile and Sign Out.

Now for Theme, a themeSlice is created with toggleTheme function and THemeProvider which provides a theme on toggle functionality.We can
access theme globally using redux where {children} prop is renedered inside a div element which takes theme as argument and apply
styles to it.Here, {children} is like App.js in main.

-----------------------------------------------------------------

A PrivateRoute is created where we are getting currentUser and if currentUser is not null then we move to its children which is present 
int <Outlet/> else we Navigate to sign-in page. So dashboard be remained private.
Now made the DashSideBar and DashProfile pages.
Now we are working on upload Image and updating it.We are importing firebase/storage to upload images. fileRef is refernece to file input element.
handleImageChange() is used to set selected image and create a url of image before uploading it. a useEffect is used which trigger when change in imageFile.
Now UploadImage is an async function because it takes time to upload image so without blocking main stack ,we use async function .We access storage configured in app in firebase.js.
A new filename every time we import a file is being created .

               const storageRef= ref(storage, filename) --- ref : Creates a reference to the location in the Firebase Storage where the file will be stored. 
                                                                  The ref function constructs a reference using the storage service and the generated filename. Mtlb storage ek directory h jha files rahegi

Upload Task is used to upload the imageFile at storageRef . In uploadTask.on , snapshot contains inforamtion about upload progess and if error occurs,we chnage the states.
If upload successfully, then we download using arrow function where we getDownloadUrl -: Retrieves the download URL of the uploaded file and updates the imageFileUrl state with this URL.
In form, ref={fileRef}: Uses a reference to the file input element, allowing it to be programmatically clicked. (when we click div of image,this ref helps )

fileRef.current.click(): This line programmatically triggers a click event on the hidden file input element. Since fileRef.current refers to the <input> element, 
calling click() on it opens the file selection dialog as if the user had clicked on the input directly.

----------------------------------------------------------------------------------------------------------------------
Today,we are making updateUser info functionality. First, we need to whether user is verified or not using cookie stored in browser.
verifyToken() is middleware function which first verify user..Token is get from req.cookies.access_token ( a_t is name we given while saving cookie in browser).
Now we check whether token exist or not and then verify token using JWT_SECRET key we saved in .env file .if token verified then attach user info from token into
req.user to pass in api route as request the next() proceed to next middleware function which is updateUser .

UpdateUser() - now we check id from verifyToken with userID from request URL .if matches then we proceed.Now passowrd and username error handling takes place
After that, to update user in db, we throw it in try catch  block, function User.findByIdAndUpdate( it takes userId from URL ) then set only specfied fields 
while excluding password to show in api message or while inspecting.

----------------------------------------------------------------------------------------------------------------------------
Today,we have done Update button functionality for DashProfile.
in userslice, made reducers like updateFailure,updateStart,updateSuccess, etc.When we change any field like username,profilepic,etc . we have to get formdata as well as updatedinfo So 
we made handleChange().
handleSubmit() is async function for form when we click on update button.Here,we check conditions lile Object.keys(formData).length === 0 means no properites is present in formData.
imageFileUploading is piece of State if uploading so setUpdateUserError. Now use try and catch block for routing.  we make a req which fetch data into response with currenUserid
we get data from res.json() into javascript object..If res is not ok ,dispatch(failure).
Show some alert at end of form componenet with success or failure.

(Note - this update functionality only works for sign up without using GoogleAuth.In GoogleAuth,we cant change email,pass,username).

-----------------------------------------------------------------------------------------------------------------------------