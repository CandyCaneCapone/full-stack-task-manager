const Task = require("../models/task")

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({})
    res.render("tasks", {tasks});
  } catch (error) {
    next(error);
  }
};
const getSingleTask = async (req, res, next) => {};
const createTask = async (req, res, next) => {};
const editTask = async (req, res, next) => {};
const deleteTask = async (req, res, next) => {};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
