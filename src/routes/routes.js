const express = require('express');
const appRouter = express.Router();

function router(){

    appRouter.get('/', function (req, res) {
        res.render('index');
    });

    return appRouter;
}
module.exports = router;