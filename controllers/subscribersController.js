const Subscriber = require('../models/Subscriber');

exports.getPage = async (req, res) => {
    try {
        const sublist = await Subscriber.find({});
        res.render('subscribers', {subs: sublist});
    } catch (error) {
        console.log(error);
        res.render('error');
    }
}




