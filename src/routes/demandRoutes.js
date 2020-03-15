const express = require('express');
const demandRouter = express.Router();

function router(){

    demandRouter.get('/addDemand', function (req, res) {
        res.send("Add Demand");
        //res.render('index');
    });

  
    return demandRouter;
}
module.exports = router;