const mongoose = require('mongoose');
const debug = require('debug')('app:projectController');
const Project = mongoose.model('Project');

exports.create = function (req, res) {
    var newProject = new Project(
        {
            projectId: req.body.projectId,
            projectDescription: req.body.projectDescription,
            projectSponsor: req.body.projectSponsor,
            projectSponsorDepartment: req.body.projectSponsorDepartment,
            projectManager: req.body.projectManager
        }
    )
    debug(req.body.projectId);
    newProject.save(function (err, newProject, count) {
        res.redirect('/');
    });
};


// query db for all open demands
exports.findProjects = function (req, res) {
    Project.find({}, function (err, projects, count) {
        res.json(projects);
    });
};