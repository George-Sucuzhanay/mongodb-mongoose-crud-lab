/*
Getting Started with MongoDB Mongoose:

mkdir mongodb-mongoose
cd mongodb-mongoose
npm init -y
npm install mongoose
mkdir db models seed
touch db/index.js models/user.js seed/users.js

In package.json:
to run nodemon do this:

"main": "db/index.js",

*/

const mongoose = require("mongoose");
mongoose.connect(`YOUR DATABASE LINK`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("Sucessfully connected to MongoDB");
})
.catch((e) => {
    console.error("Connection error", e.message)
})
const db = mongoose.connection;
module.exports = db
