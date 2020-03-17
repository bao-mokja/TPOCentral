const express = require('express');
var mongoose = require('mongoose');
const debug = require('debug')('app:demandRoutes');
const demandController = require('../controllers/demandController');

const demandRouter = express.Router();



function router(){

    

    demandRouter.get('/addDemand', function (req, res) {
        res.render('addDemand');
    });

    demandRouter.post('/addDemand',  demandController.create);

    demandRouter.get('/openDemands', demandController.openDemands);
    
    demandRouter.get('/acceptedDemands', demandController.acceptedDemands);
    



  
    return demandRouter;
}
module.exports = router;