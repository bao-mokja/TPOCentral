const express = require('express');
const appRouter = express.Router();

function router(){

    appRouter.get('/', function (req, res) {
        res.render('index');
    });

    appRouter.get('/openDemands', function (req, res) {
        res.render('openDemands');
      });
    
    appRouter.get('/acceptedDemands', function (req, res) {
        res.render('acceptedDemands');
    });

    return appRouter;
}
module.exports = router;