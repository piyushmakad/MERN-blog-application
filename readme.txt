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
Today,We are creating delete User route with router.delete and verifyToken deleteUser middleware.
In user.controller, deleteUser is an async function which first check req.user.id with id from url. and after that, just try and catch block statement.
In user slice ,we have created delete reducers.
In DashProfile,some Modal componenet is used for frontend while on click shows a popup windows.
handleDeleteUser works onClick the delete user span and only works when Yes,I am sure.
first it dispatch(deleteUserStart reducer) and res is fetched from api .After try block with method : "Delete" and no need of headers required.
json() is used to parse a JSON-string formatted response into js object for further use.

------------------------------------------------------------------------------------------------------------------------------
Today,we are creating CreatePost interface when the user is admin.For rich text editor,we use
ReactQuill lib.We are using <form> to create form with functionalities provided by flowbite.
we use select,textinput,fileinput,button etc for styling our page.

For our Create-post Api, we create post.controller.js , post.model.js and post.route.js.
In postModel, we define schema of the post.fields that are required,things that it will store,etc.
In postroute,we first make a router using express then provide a '/create' post request which take verifyToken
and create functiona as middleware function.
In post.controller,first we import post model and errorHandler.We create a async function .
we check if req user is admin then we proceed.Now we check if req body contains title or content.
then we create a slug,its like a url friendly version of post title.Now we create a post using new Post.
then we save post using try catch block.

---------------------------------------------------------------------------------------------------------

Today, we are creating a DashPosts for sidebar where we show posts if user is Admin.
In post controller,we create a get request to get the post present in DB.getPosts method is async function.
we get startIndex ,limit , sorting direction from req.query which then parse into Integer.
Now we are constructing query object:- here conditional filters are added to query object if userId is provided
or category or slug ,etc .for searchTerm, it uses a regular expression to perform a case-insensitive search for 
both title and content.
we sort posts on bases of updatedTime we can skip no of documents if want but its 0 currently
and we can limit how many posts to show
we can count totalPosts using Post.countDocuments
now we calculate date one month ago from today and we count post created in last month
which usesa a filter by createdAt .
then we send response with status and json contains array of post,total posts and lastmonth posts. 
$gte - greater than or equal To.

Now, we create frontend for DashPosts. useEffects() runs the fetch logic when components starts or mounts or 'id' changes.
fetchPosts() is async function which call getPost api based on currentUser._id.
Now response is converted into json for js objects to use.and setPosts if res is oK.
The table is only rendered if currentUser.isAdmin is true and userPosts is not empty.
userPosts.map iterates over each post in userPosts.
Each post is rendered in a Table.Body and Table.Row.

--------------------------------------------------------------------------------------------------

Today, we are completing showMore button functionality for DashPosts.we use state function to set
showMore functionality and click event listener on show More button.It fetches data with currentUser._id
and startIndex when length of post > 9 it will work.

DeletePost functionlity :-  we create two state variable showModal which controls modal dialog box when click on delete button and 
                            postIdtoDelete which stores post to be deleted. when user click on delete button, showModal becomes true
                            and postIdtoDelete stores post._id. Then HandleDeletePost is responsible for deleting the post which first
                            fetch data from api and if res is ok filters out the deleted post.

delelepost api :- it check if user is admin or id of user (req.user.id) matches the userId parameter from the request URL. Then we findPostByid and delete
                  which matches postId from request URL.

UpdatePost:- The UpdatePost component allows users to update an existing post. It includes functionalities for fetching the post details, uploading a new image
             , editing the post content, and submitting the updated post.
             useParams is use to populate postId from URL.useEffect is called whenever there is change in postId or when componenet mounts.
             handleSubmit is used to upadate the post using put request.

updatepost api:- to update the post, we check is user is Admin or userid is equal to id from request url.It ensures only Admin or user itself can update the post.
                 Post.findByIdAndUpdate(req.params.postId, {...}, { new: true }):
                 req.params.postId: The ID of the post to be updated, extracted from the request parameters.
                 The $set operator is used to update the fields (title, content, category, image) with the new values provided in the request body (req.body).
                { new: true }: This option ensures that the function returns the updated document. 


Now, completed the DashUser which is similar to DashPosts where we get users,delete them and delete api 
route is made..

----------------------------------------------------------------------------------------------------------------------------------------------------------

Today,we worked on PostPage page funcitonality.useParams is used to access URL paramteter.
we rendered fetchPost everyTime when postSlug changes or component mounts.Simply we getPosts wth given slug
which is array so we want first element which is post.After that is tailwind css and componenets.
Now, a CallToAction componenet renders at the end in which we show image in right side and heading,paragraph
on left side with button.

Now we are making ScrollToTop componenet which whenever our we redirected then it always show the new page from Top.
for the comment Section, we are making comment Api and model.Comment Model :- the schema stores content,userid,likes by users stored in array,
noOflikes,etc. 
In CommentROute, we creating a post request for creating comment with verifyUser. 
In createComment function, we are extracting content,postID,userId from req body and some condition checks. Then we create new comment with postId content userid
then save the comment in DB.This new comment goes back to client as response.

In frontend CommentSection.jsx,
we are using a handleSubmit function for form where we preventDefault submit then try catch.It makes a post request to server
with body sending three things content: comment, currentUser._id, postId from props.
Gets data as response .

The component conditionally renders different UI elements based on whether the user is signed in (currentUser exists).
If signed in, it shows the user's information (profile picture, username) and the comment form. If not signed in, it prompts the user to sign in with a 
link to the sign-in page.
--------------------------------------------------------------------------------------------------------------
For Getting comments we are creating a api route, getPostComments based on postId.
finding comment by if postId === postId from url.
To show which user commented we can get user based on userId from comment.
In user route, getUserForComment() function is passed in which we get user by findById of userId
and get all details except password and parse the response as json().

In CommentSection, we are getting all the comments through getComments function used in useEffect 
which renders when postId changes. we get comments from api with postId and if res is ok set the 
data with all the comments posted on the post (it may have different users).
Then  Comment componenet takes place when mapping comments.
In Comment, we are fetching getUser from api based on userId present in comment which we are passing 
as props in Comment componenet.fetching data and showing.

--------------------------------------------------------------------------------------------------------------