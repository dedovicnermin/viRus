const Department = require('../models/Department');
const Subscriber = require('../models/Subscriber');

exports.getPage = (req, res) => {
    res.render('contact');
}


exports.getDepartment = async (req, res) => {
    try {
        if (req.body.state == "---") {
            res.send(false);
        }
        const dep = await Department.findOne({state: req.params.state}).exec();
        res.send(dep.site);
    } catch (error) {
        console.log(error);
        res.render('error');
    }
}


exports.addToSubList = async (req, res) => {
    try {
       await Subscriber.create({
           name: req.body.name,
           email: req.body.email
       });
       res.render('thanks');
    } catch (error) {
        console.log(error);
        res.render('error');
    }
}