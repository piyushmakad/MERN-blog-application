Nodemon - package is used to update server without restarting

MongoDB is NoSQL db management system.
mongoose.connect is used to connect to server and in password,@ is special keyword so if we want to use @ => %40 is used inplace 

.env file is used to hide important info like password which we dont want to share on GITHUB . npm i dotenv 

UserSchema is created in model which defines how our user schema is. and what require fields are stored...

User = mongoose.model(it takes a  User and UserSchema which we created.'User' automatically changes to 'Users' in mongoose.model to apply schema to every user present)