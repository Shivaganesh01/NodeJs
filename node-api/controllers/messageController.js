const Message = require("../models/message")

exports.getMessage = (req, res, next) => {
    res.send("Node API App.")
    next();
};

exports.getMessages = (req, res, next) => {
    const messages = Message.find().select("_id title body")
        .then(result => {
            res.json({ message: result })
        }).catch(err = res.status(400).json({ error: err }))
    next();
};

exports.createMessage = (req, res, next) => {
    // console.log("Creating Message: ", req.body);
    const messageData = new Message(req.body);
    console.log("Creating Message: ", messageData);
    messageData.save().then(result => {
            res.status(201).json({ message: result })
        })
        // messageData.save((err, result) => {
        //     if (err) {
        //         return res.status(400).json({ error: err })
        //     }
        //     res.status(201).json({ message: result })
        // })
    next();
}