const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    post_name: String,
    post_date: {
        type: Date,
        "default": new Date()
    },
    post_content: String
    
});


const Post = mongoose.model("Post", postSchema);




// var post1 = new Post({
//     post_name: "Nermin Dedovic",
//     post_date: new Date(),
//     post_content: "Has anyone seen the latest update on the lockdown in the US?",
//     post_comments: [{date: new Date(), comment: 'I seen something on ABC7, but looks like another 2 months of lockdown :('}]
// });

// post1.save((error, savedDocument) => {
//     if (error) console.log(error);
//     console.log(savedDocument);
// });


module.exports = Post;

