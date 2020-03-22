const mongoose = require('mongoose');
const debug = require('debug')('app:demandController');
const Demand = mongoose.model('Demand');
const moment = require('moment');

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
    Demand.find({ demandStatus : ["Open", "On-going", "On-hold"] } ,function (err, demands, count) {
        res.render('openDemands', {
            demands: demands,
            moment: moment
        });
    });
};

// query db for all accepted demands
exports.acceptedDemands = function (req, res) {
    Demand.find({ demandStatus : ["Qualified", "Pending kick off"]  }, function (err, demands, count) {
        res.render('acceptedDemands', {
            demands: demands,
            moment: moment
        });
    });
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
        res.render('demandDetail', {
            demandDetail: demand,
            moment: moment
        });
    });
};