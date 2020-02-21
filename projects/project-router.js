const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    // GET all projects
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retreive Projects!' });
        });
});

router.get('/:id', (req, res) => {
    // GET one project by ID
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: `Could not find project with id: ${id}!` })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retreive specified Project!' });
        })
})

router.get('/:id/tasks', (req, res) => {
    // GET tasks by project ID
    const { id } = req.params;

    Projects.findTasks(id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retreive Tasks!' });
        })
})

router.get('/:id/resources', (req, res) => {
    // GET resources by project ID
    const { id } = req.params;

    Projects.findProjectResources(id)
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retreive Project Resources!'});
        })
})

router.post('/', (req, res) => {
    // POST a new project
    const projectData = req.body;

    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to add new Project!' });
        })
})

router.post('/:id/tasks', (req, res) => {
    // POST a new task for a project
    const { id } = req.params;
    const taskData = req.body;

    Projects.addTask(id, taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to add new Task!' });
        })
})

router.post('/:id/resources', (req, res) => {
    // POST a new resource for a project
    const { id } = req.params;
    const resourceData = req.body.resource;
    const projectResourceData = req.body.project_resource;

    Projects.addResource(resourceData)
        .then(resource => {
            Projects.addProjectResource(projectResourceData)
                .then(projectResource => {
                    res.status(201).json({ resource: resource, projectResource: projectResource })
                })
                .catch(err => {
                    console.log(err);
            res.status(500).json({ message: 'Failed to add new Resource!' });
                })
        })
        .catch()
})

router.put('/:id', (req, res) => {
    // UPDATE a project by ID
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
        .then(project => {
            if (project) {
                Projects.update(id, changes)
                    .then(updatedProject => {
                        res.status(200).json(updatedProject);
                    })
                    .catch(err => {
                        console.log(err);
            res.status(500).json({ message: 'Failed to update specified Project!' });
                    })
            } else {
                res.status(404).json({ message: `Could not find project with id: ${id}!` })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retreive specified Project!' });
        })
})

router.put('/:id/tasks/:task_id', (req, res) => {
    // UPDATE a task by in a project by task ID 
    const { id } = req.params;
    const { task_id } = req.params;
    const changes = req.body;

    Projects.findById(id)
        .then(project => {
            if (project) {
                Projects.findTaskById(id, task_id)
                    .then(task => {
                        Projects.updateTask(id, task_id, changes)
                            .then(updatedTask => {
                                res.status(200).json(updatedTask);
                            })
                            .catch(err => {
                                console.log(err);
            res.status(500).json({ message: 'Failed to update specified Task!' });
                            })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Could not find specified Task!' })
                    })
            } else {
                res.status(404).json({ message: `Could not find project with id: ${id}!` })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retrieve specified Project!' })
        })
})

router.put('/:id/resources/:resource_id', (req, res) => {
    // UPDATE a resource in a project by resource ID
    const { id } = req.params;
    const { resource_id } = req.params;
    const changes = req.body.resource;
    const project_resource_changes = req.body.project_resource;

    Projects.findById(id)
        .then(project => {
            if (project) {
                Projects.findResourceById(resource_id)
                    .then(resource => {
                        Projects.updateResource(resource_id, changes)
                            .then(updatedResource => {
                                Projects.updateProjectResource(id, resource_id, project_resource_changes)
                                res.status(200).json(updatedResource)
                                    .then(updatedProjectResource => {
                                        res.status(200).json({ resource: updatedResource, project_resource: updatedProjectResource })
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        res.status(500).json({ message: 'Could not update Project Resource' })
                                    })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ message: 'Could not update Resource.'})
                            })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Could not find specified Resource' })
                    })
            } else {
                res.status(404).json({ message: 'Could not find specified Project!' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to retrieve specified Project!' })
        })
})

router.delete('/:id', (req, res) => {
    // DELETE a project by ID
    const { id } = req.params;

    Projects.remove(id)
        .then(deleted => {
            res.status(200).json({ removed: deleted })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Could not delete this Project!' })
        })
})

router.delete('/:id/tasks/:task_id', (req, res) => {
    // DELETE a task in a project by task ID
    const { id } = req.params;
    const { task_id } = req.params;

    Projects.removeTask(id, task_id)
        .then(deleted => {
            res.status(200).json({ removed: deleted });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Could not delete this Task!' })
        })
})

router.delete('/:id/resources/:resource_id', (req, res) => {
    // DELETE a resource in a project by resource ID
    const { resource_id } = req.params;

    Projects.removeResource(resource_id)
        .then(deleted => {
            res.status(200).json({ removed: deleted });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Could not delete this Resource!' })
        })
})

module.exports = router;