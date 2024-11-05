const path = require("path");

module.exports = path.dirname(require.main.filename);

const rootDir = require('../util/path');

userRouter.get('/' , (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
})