const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const AppState = require('../models/appState');

router.get('/:ID', (req, res, next) => {
    const id = req.params.ID;
    AppState.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

router.patch('/:ID', (req, res, next) => {
    const id = req.params.ID;
    AppState.update({_id: id}, {$set: {
        gods: req.body.gods,
        relics: req.body.relics,
        cooldown: req.body.cooldown,
        objectives: req.body.objectives
    }})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});

router.post('/', (req, res, next) => {
    const appState = new AppState({
        _id: new mongoose.Types.ObjectId(),
        gods: req.body.gods,
        relics: req.body.relics,
        cooldown: req.body.cooldown,
        objectives: req.body.objectives
    });
    appState.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(error));
    //res.status(201).json(appState);
});

module.exports = router;