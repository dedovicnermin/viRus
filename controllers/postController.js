const Post = require('../models/Post');



exports.getPage = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({post_date: 'desc'});
        
        
        res.render('postsPage', {posts});
        // res.json({posts: posts});
    } catch (error) {
        console.log(error);
        res.render('error');
    }
    
}

exports.enterPost = async (req, res) => {
    try {
        const post = await Post.create({
            post_name: req.body.postName,
            post_date: new Date(),
            post_content: req.body.postContent
        });

        res.send(post);

    } catch (error) {
        console.log(error);
        res.send(false);
    }
}

