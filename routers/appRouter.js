const appRouter = require('express').Router();

const indexController = require('../controllers/indexController.js'),
    infoController = require('../controllers/infoController'),
    postController = require('../controllers/postController'),
    subscriberController = require('../controllers/subscribersController'),
    chatroomController = require('../controllers/chatroomController'),
    contactController = require('../controllers/contactController');


//indexPage
appRouter.get('/', indexController.getPage);

//infoPage
appRouter.get('/info', infoController.getPage);

//postPage
appRouter.get('/posts', postController.getPage);
appRouter.post('/posts', postController.enterPost);



//subscriber page
appRouter.get('/subscribers', subscriberController.getPage);


//chatroom page
appRouter.get('/chatroom', chatroomController.getPage);


//contactPage
appRouter.get('/contact', contactController.getPage);
appRouter.get('/healthlink/:state', contactController.getDepartment);
appRouter.post('/contact', contactController.addToSubList);









module.exports = (io) => {
    var numUser = 0;
    io.on('connection', function(socket) {
        numUser = numUser + 1;
        console.log("user is now connected.");
        
        socket.username = socket.handshake.query.username;
        socket.color = randomColor();

        io.sockets.emit('new_user', {num: numUser, name: socket.username});
        

        
        socket.on('disconnect', () => {
            numUser--;
            io.sockets.emit('user_left', {num: numUser, username: socket.username});
        });

        socket.on('postMsg', data => {
            const {msg, time} = data;
            io.sockets.emit('new_msg', {username: socket.username, msg: msg, time: time, color: socket.color })
        });

        function randomColor() {
            const hex = Math.floor(Math.random()*16777215).toString(16);
            return '#' + hex;
        }



    });

    return appRouter;

}