const express = require('express'),
    app = express(),
    layouts = require('express-ejs-layouts'),
    db = require('./config/db'),
    errorController = require('./controllers/errorController'),
    port = 3000;


var server = app.listen(port);
app.io = require('socket.io')(server);
var appRouter = require('./routers/appRouter')(app.io);




app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

//db
db.once("open", () => {
    console.log("successfully connected to MongoDB using mongoose");
});


//for uploads
const fileRouter = express.Router();
const upload = require('./config/multerConfig')(__dirname);
require('./controllers/uploadController')(app, fileRouter, upload, __dirname);

app.use("/", appRouter);


//errorHandeling
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


