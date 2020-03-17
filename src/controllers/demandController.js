var mongoose = require('mongoose');

var Demand = mongoose.model('Demand');

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
    Demand.find({ demandStatus : "Open" } ,function (err, demands, count) {
        res.render('openDemands', {
            demands: demands
        });
    });
};

// query db for all accepted demands
exports.acceptedDemands = function (req, res) {
    Demand.find({ demandStatus : "Accepted" }, function (err, demands, count) {
        res.render('acceptedDemands', {
            demands: demands
        });
    });
};