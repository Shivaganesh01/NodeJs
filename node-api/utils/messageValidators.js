exports.createMessageValidator = (req, res, next) => {
    req.check('title', 'Give Title').notEmpty();
    req.check('title', 'Length must be from 4 to 20').isLength({ min: 4, max: 20 })

    req.check('body', 'Give Body').notEmpty();
    req.check('body', 'Length must be from 4 to 100').isLength({ min: 4, max: 100 })

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError })
    };
    next();
}