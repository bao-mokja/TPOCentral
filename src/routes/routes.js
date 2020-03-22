const express = require('express');
const appRouter = express.Router();
const mongoose = require('mongoose');
const Demand = mongoose.model('Demand');
const debug = require('debug')('app:routes');

const openStatuses = ["Open", "On-going", "On-hold"] ;
const acceptedStatuses = ["Qualified", "Pending kick off"] ;

function router(){

    appRouter.get('/', async function (req, res) {

        var openDemands = await getDemandsCountByStatuses(openStatuses);

        var acceptedDemands = await getDemandsCountByStatuses(acceptedStatuses);

        res.render('index', {
            openDemands: openDemands,
            acceptedDemands: acceptedDemands
        });
    });

    let getDemandsCountByStatuses = async (statuses) => {
        const demands = await  Demand.find({ demandStatus: statuses });
      
        return demands;
    }

    return appRouter;
}
module.exports = router;