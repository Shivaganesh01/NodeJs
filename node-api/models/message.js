const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
    // title: {
    //     type: String,
    //     required: "title is required",
    //     minlength: 4,
    //     maxlength: 20
    // },
    // body: {
    //     type: String,
    //     required: "body is required",
    //     minlength: 4,
    //     maxlength: 100
    // }
});

module.exports = mongoose.model("Message", messageSchema);