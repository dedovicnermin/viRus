$(document).ready( () => {
    var nameSpace = prompt('Enter name to be displayed in Chatroom:');
    if (nameSpace == undefined || nameSpace == "") nameSpace = "User" + Math.floor((Math.random() * (10001 - 1) + 1));
    var name = nameSpace.split(" ").join("");
    
    
    var socket = io.connect('http://localhost:3000', {query: `username=${name}`});
    
    socket.on('new_user', data => {
        if (data.name != name) {
            alert(data.name + ' has entered the chatroom.');
        }
        
        $("#numUsers").text("Users in Chat: " + data.num);
    });

    socket.on('user_left', data => {
        alert(data.username + " has left the chatroom.");
        $("#numUsers").text("Users in Chat: " + data.num);
    });

    $('body').on('click', '#sendMsgBtn', event => {
        event.preventDefault();
        let msg = $('#msg').val();
        $('#msg').val("");

        let d = new Date().toString();
        let splitTime = d.split('GMT');
        let time = splitTime[0];

        socket.emit('postMsg', {msg: msg, time: time});
        return false;
    });

    socket.on('new_msg', data => {
        if (!data) return;

        const {msg, time, username, color} = data;
        if (name == username) {
            
            $("#chat").append(
                '<div class="msg-container darker"><div class="user-color right ' + username + '"></div><p style="font-size: 2rem; margin-bottom: 1.5rem;">'
                + msg + '</p><span class="time-left" style="font-size:1.5rem;">' +
                username + ' : ' + time + '</span></div>'
            );
            let str = "." + username;
            $(str).css('background-color', color);

        } else {
            
            $("#chat").append(
                '<div class="msg-container"><div class="user-color ' + username + '"></div><p style="font-size: 2rem; margin-bottom: 1.5rem;">'
                + msg + '</p><span class="time-right" style="font-size:1.5rem;">' +
                time + " : " + username + '</span></div>'
            );
            let str = "." + username;
            $(str).css('background-color', color);
        }
        
    })
} )