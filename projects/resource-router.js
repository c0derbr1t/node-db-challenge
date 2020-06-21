const express = require('express');

const Resources = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.findResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retreive Resources' })
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to add new Resource' })
        })
})

module.exports = router;