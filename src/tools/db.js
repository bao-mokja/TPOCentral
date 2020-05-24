const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;
 
var demandSchema = new mongoose.Schema({
    demandName: String,
    demandDescription: String,
    demandCountry: String,
    demandRequestor: String,
    demandLeader: String,
    demandStatus: String,
    demandRequestedDate: Date,
    demandTargetDate: String,
    demandComments: String
});

mongoose.model( 'Demand', demandSchema );
 
var projectSchema = new mongoose.Schema({
    projectId: String,
    projectDescription: String,
    projectSponsor: String,
    projectSponsorDepartment: String,
    projectManager: String
});


mongoose.model( 'Project', projectSchema );
mongoose.connect( 'mongodb+srv://admin:admin@cluster0-kum5q.mongodb.net/test?retryWrites=true&w=majority' );