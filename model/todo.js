const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todo : {
        type : String,
        require : true,
    }
});

module.exports = new mongoose.model("todo", todoSchema);