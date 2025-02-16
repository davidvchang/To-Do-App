import TasksModel from '../models/tasks.model.js'

const taskController = {}

taskController.getAllTasks = async (req, res) => {
    try {
        const task = await TasksModel.find()
        res.status(200).json(task)
    } catch (ex) {
        res.status(500).json("An error has ocurred: " + ex)
    }
}

export default taskController