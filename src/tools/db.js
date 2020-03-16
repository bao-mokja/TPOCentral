const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;
 
var demandSchema = new mongoose.Schema({
    demandName: String,
    demandDescription: String,
    demandCountry: String,
    demandRequestor: String,
    demandLeader: String,
    demandStatus: String,
    demandRequestedDate: Date
});

mongoose.model( 'Demand', demandSchema );
mongoose.connect( 'mongodb://localhost:27017/tpoCentral' );