const mongoose = require('mongoose');




mongoose.connect("mongodb+srv://nermindedovic:marki1968@cluster0.83qeg.mongodb.net/viRus?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

module.exports = db;