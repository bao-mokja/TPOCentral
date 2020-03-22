const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug')('app:demandRoutes');
const demandController = require('../controllers/demandController');
const Demand = mongoose.model('Demand');
const demandRouter = express.Router();



function router(){

   

    demandRouter.get('/addDemand', function (req, res) {
        res.render('addDemand');
    });

    demandRouter.post('/addDemand',  demandController.create);

    demandRouter.get('/openDemands', demandController.openDemands);
    
    demandRouter.get('/acceptedDemands', demandController.acceptedDemands);

    demandRouter.use('/:_id',(req,res,next) => {
        Demand.findById({ _id : req.params._id }, function (err, demand, count) {
            if(demand){
                req.demand = demand
                return next();
            }
        });      
    });
    
    demandRouter.get('/:_id', demandController.demandById);

    demandRouter.post('/:_id', demandController.updateDemand);
    



  
    return demandRouter;
}
module.exports = router;