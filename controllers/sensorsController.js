const db = require("../models");

// Defining methods for the sensorsController
module.exports = {
    findAll: function(req, res) {
        db.Sensor
            .find(req.query)
            .sort({ _id: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Sensor
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByType: function(req, res) {
        db.Sensor
            .find(req.query)
            .where("type").equals(req.params.type)
            .sort({ _id: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Sensor
            .create(req.body)
            .then(dbModel => db.House.findOneAndUpdate({ _id: req.params.id }, { $push: { sensors: dbModel._id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Sensor
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Sensor
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => db.House.findOneAndUpdate({ _id: req.body.id }, { $pull: { notes: dbModel._id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

