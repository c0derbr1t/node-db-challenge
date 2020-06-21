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
    remove
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

function add(project) {
    return db('projects')
        .insert(project, 'id');
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id');
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

function remove(id) {
    return db('projects')
        .where({ id })
        .del();
}