const expressServer = require("express");
const { getMessage, getMessages, createMessage } = require("../controllers/messageController");
const validator = require("../utils/messageValidators");

const router = expressServer.Router();

router.get("/", getMessage);
router.get("/messages", getMessages);
router.post("/", validator.createMessageValidator, createMessage);
module.exports = router;