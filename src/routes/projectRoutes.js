const express = require('express');
const mongoose = require('mongoose');
const projectController = require('../controllers/projectController');
const Project = mongoose.model('Project');
const projectRouter = express.Router();

function router(){

    projectRouter.get('/addProject', function (req, res) {
        res.render('addProject');
    });

    projectRouter.post('/addProject',  projectController.create);


    projectRouter.get('/getProjects', projectController.findProjects);

    return projectRouter;
}


module.exports = router;