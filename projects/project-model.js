const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findTasks,
    findResources,
    findProjectResources,
    add,
    addTask,
    addResource,
    addProjectResource,
    update,
    remove,
    removeTask,
    removeResource
}

function find() {
    return db('projects');
}

function findById(id) {
    if(!db('projects').where({ id })) {
        return null;
    } else {
        return db('projects').where({ id }).first();
    }
}

function findTasks(id) {
    return db('projects as p')
        .where('p.id', id)
        .join('tasks as t', 'p.id', 't.project_id')
        .select('p.name', 'p.description', 't.task_number','t.description', 't.notes')
        .where('t.project_id', id)
        .orderBy('t.task_number');
        

}

function findResources() {
    return db('resources as r')
        .join('project_resources as pr', 'pr.resource_id', 'r.id')
        .join('projects as p', 'p.id', 'pr.project_id')
        .select('p.id as Project ID', 'p.name as Project', 'r.id as Resource ID', 'r.name as Resource', 'r.description as Description', 'pr.notes as Notes')
}

function findProjectResources(id) {
    return db('resources as r')
        .join('project_resources as pr', 'pr.resource_id', 'r.id')
        .join('projects as p', 'p.id', 'pr.project_id')
        .select('p.name as Project Name', 'r.name as Resource Name', 'r.description as Description', 'pr.notes as Notes')
        .where('p.id', id);
}

function findResourceById(id, resource_id) {
    if(!db('projects').where({ id })) {
        return null;
    } else {
        if(!db('project_resources').where({ project_id: id})) {
            return null;
        } else {
            if(!db('resources').where({ id: resource_id })) {
                return null;
            } else {
                return db('resources'.where({ id: resource_id }))
            }
        }
    }
}

function add(project) {
    db('projects')
        .insert(project, 'id');
    return db('projects');
}

function addTask(id, task) {
    db('tasks')
        .where('project_id', id)
        .insert(task, 'id');
    return db('tasks').where('project_id', id);
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function addProjectResource(id, project_resource) {
    return db('project_resources')
        .where('project_id', id)
        .insert(project_resource);
}

function update(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes);
}

function updateTask(id, task_id, changes) {
    return db('tasks')
        .where('project_id', id, 'id', task_id)
        .update(changes);
}

function updateResource(resource_id, changes) {
    return db('resources')
        .where('id', resource_id)
        .update(changes);
}

function updateProjectResource(id, resource_id, product_resource_changes) {
    return db('project_resources')
        .where('project_id', id, 'resource_id', resource_id)
        .update(product_resource_changes);
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del();
}

function removeTask(id, task_id) {
    return db('tasks')
        .where('project_id', id, 'id', task_id)
        .del();
}

function removeResource(resource_id) {
    return db('resources')
        .where('id', resource_id)
        .del()
}