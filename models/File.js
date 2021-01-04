const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    file_name: String,
    doc: Buffer,
    file_description: String,
    file_date: {
        type: Date,
        "default": new Date()
    },
});
const File = mongoose.model("File", fileSchema);

module.exports = File;