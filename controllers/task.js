const Task = require("../models/task")

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({})
    res.render("tasks", {tasks});
  } catch (error) {
    next(error);
  }
};
const getCreateTask = async (req, res, next) => {
  try {
    res.render("add-task")
  }catch(error){
    next(error)
  }
};
const createTask = async (req, res, next) => {
  try {
    await Task.create(req.body)
    res.status(201).redirect("/")
  }catch(error) {
    next(error)
  }
};
const getSingleTask = async (req, res, next) => {};
const editTask = async (req, res, next) => {};
const deleteTask = async (req, res, next) => {};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  getCreateTask , 
  editTask,
  deleteTask,
};
