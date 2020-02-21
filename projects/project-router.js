const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    // GET all projects
});

router.get('/:id', (req, res) => {
    // GET one project by ID
})

router.get('/:id/tasks', (req, res) => {
    // GET tasks by project ID
})

router.get('/:id/tasks/:task_id', (req, res) => {
    // GET one task in a project by task ID
})

router.get('/:id/resources', (req, res) => {
    // GET resources by project ID
})

router.get('/:id/resources/:resource_id', (req, res) => {
    // GET one resource in a project by resource ID
})

router.post('/', (req, res) => {
    // POST a new project
})

router.post('/:id/tasks', (req, res) => {
    // POST a new task for a project
})

router.post('/:id/resources', (req, res) => {
    // POST a new resource for a project
})

router.put('/:id', (req, res) => {
    // UPDATE a project by ID
})

router.put('/:id/tasks/:task_id', (req, res) => {
    // UPDATE a task by in a project by task ID 
})

router.put('/:id/resources/:resource_id', (req, res) => {
    // UPDATE a resource in a project by resource ID
})

router.delete('/:id', (req, res) => {
    // DELETE a project by ID
})

router.delete('/:id/tasks/:task_id', (req, res) => {
    // DELETE a task in a project by task ID
})

router.delete('/:id/resources/:resource_id', (req, res) => {
    // DELETE a resource in a project by resource ID
})

module.exports = router;