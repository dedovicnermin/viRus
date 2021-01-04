$(document).ready( () => {
    $('body').on('click', '#submitPost', (event) => {
        event.preventDefault();
        let t = $('#postNameInput').val();
        let c = $('#postContent').val();

        if (!t || !c) {
            alert("Please enter valid post information.")
            return false;
        }

        $('#postNameInput').val("");
        $('#postContent').val("");

        $.ajax({
            type: "POST",
            url: "/posts",
            data: {postName: t, postContent: c},
            async: true,
            success: (data) => {
                if (data) {
                    const date = new Date(data.post_date);
                    let d = date.toString().split('GMT');
                    console.log(d);
                    $('#postContainer').prepend(
                        '<div class="post"><div class="post__title"><p class="postPage--ML">' + data.post_name + '</p></div>' +
                            '<div class="post__content"><p class="postPage--ML">' + data.post_content + '</p></div>' +
                            '<div class="post__date"><p class="postPage--ML">' + d[0] + '</p></div></div>'
                    );
                    $("#addPost").removeClass("active");
                    $("#overlay").removeClass("active");
                }
            }, 
            error: (err) => {
                console.log(err);
                alert("Could not add post.");
            }
        });

        
    });
});