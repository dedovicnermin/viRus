
const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    name: String,
    email: String
});
const Subscriber = mongoose.model("Subscriber", subscriberSchema);

// var subscriber1 = new Subscriber({
//     name: "Nermin Dedovic",
//     email: "nd@email.com"
// });

// subscriber1.save((error, savedDocument) => {
//     if (error) console.log(error);
//     console.log(savedDocument);
// });

module.exports = Subscriber;