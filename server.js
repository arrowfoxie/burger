// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3200;
var app = express();

// use public asset files and body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// set handlebars.
var exphbs = require("express-handlebars");

// set app to use handlebars engine and default layout
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// import routes 
var routes = require("./controllers/burgers_controller.js");

// use routes
app.use("/", routes);

app.listen(PORT, function () {
    // log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});