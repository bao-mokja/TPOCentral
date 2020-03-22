const mongoose = require('mongoose');
const debug = require('debug')('app:demandController');
const Demand = mongoose.model('Demand');
const moment = require('moment');

const openStatuses = ["Open", "On-going", "On-hold"] ;
const acceptedStatuses = ["Qualified", "Pending kick off"] ;

exports.create = function (req, res) {
    var newDemand = new Demand(
        {
            demandName: req.body.demandName,
            demandDescription: req.body.demandDescription,
            demandCountry: req.body.demandCountry,
            demandRequestor: req.body.demandRequestor,
            demandLeader: req.body.demandLeader,
            demandStatus: "Open",
            demandRequestedDate: Date.now()
        }
    )
    newDemand.save(function (err, newDemand, count) {
        res.redirect('/');
    });
};

// query db for all open demands
exports.openDemands = function (req, res) {
    displayDemands(res,openStatuses);
};

// query db for all accepted demands
exports.acceptedDemands = function (req, res) {
    displayDemands(res,acceptedStatuses);
};

// query db for all accepted demands
exports.demandById = function (req, res) {    
    res.render('demandDetail', {
        demandDetail: req.demand,
        moment: moment
    });
};

// query db for all accepted demands
exports.updateDemand = function (req, res) {    
    const {demand} = req

    if(req.body._id){
        delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        demand[key] = value;
       
    });

    req.demand.save((err)=>{
        if(openStatuses.includes(req.demand.demandStatus) ){
            displayDemands(res,openStatuses);
        }
        else{
            displayDemands(res,acceptedStatuses);
        }
        //res.render('demandDetail', {
        //    demandDetail: req.demand,
         //   moment: moment
        //});
    });
};

function displayDemands(res, statuses) {
    Demand.find({ demandStatus: statuses }, function (err, demands, count) {
        res.render('demandList', {
            demands: demands,
            moment: moment
        });
    });
}
