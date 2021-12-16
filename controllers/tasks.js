

const getAllTasks = (req, res) => {
    res.send('get All tasks')
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.send('update Task')
}

const deleteTask = (req, res) => {
    res.send('delete Task')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}