const express = require('express');
const debug = require('debug')('app:adminRoutes');
const {MongoClient, ObjectID} = require('mongodb');

const adminRouter = express.Router();


function router(){
    adminRouter.route('/').get((req,res) => {
        const url = 'mongodb://localhost:27017'
        const dbName = 'tpoCentral';

        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                debug(`Connected to server ${url}`);

                const db = client.db(dbName);

                const demands = await db.collection('demands').find().toArray;
                res.render('acceptedDemands')
            }
            catch(err){

            }
        }());
    });

    return adminRouter;
}
module.exports = router;