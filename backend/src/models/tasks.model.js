import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }, 
    status: {
        type: String,
        default: "Pending",
        required: false
    }
}, {
    timestamps: true
})

const Task = mongoose.model("Task", tasksSchema);

export default Task