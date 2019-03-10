const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://heroku_gbgvgc69:qecgpbimqdd0q250fegjv0lbru@ds019078.mlab.com:19078/heroku_gbgvgc69",
    {
        useMongoClient: true
    }
);

// Start the API server
mongoose.connection.on('error', function(err) {
    console.log("Mongoose Error: " + err);
})

mongoose.connection.on('open', function() {
    console.log("Mongoose connection successful.");

    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
    
});
