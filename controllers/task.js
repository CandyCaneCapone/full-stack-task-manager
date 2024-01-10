const Task = require("../models/task");
const NotFoundError = require("../errors/not-found");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.render("tasks", { tasks });
  } catch (error) {
    next(error);
  }
};
const getCreateTask = async (req, res, next) => {
  try {
    res.render("add-task");
  } catch (error) {
    next(error);
  }
};
const createTask = async (req, res, next) => {
  try {
    await Task.create(req.body);
    res.status(201).redirect("/");
  } catch (error) {
    next(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      throw new NotFoundError("Task not found");
    }

    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

const getEditTask = async (req , res , next) => {
  try {
    const taskId = req.params.id 
    const task = await Task.findById(taskId)
    if (!task) {
      throw new NotFoundError("Task not found")
    }

    res.render("edit-task" , {task})
  }catch(error) {
    next(error)
  }
}
const editTask = async (req, res, next) => {
  try {
    const taskId = req.params.id 
    const updateFields = {
      title : req.body.title , 
      description : req.body.description , 
      completed : req.body.completed 
    }
    const task = await Task.findByIdAndUpdate(taskId , updateFields , {
      runValidators : true 
    })
    if (!task) {
      throw new NotFoundError("Task not found")
    }

    res.redirect("/")
  }catch(error) {
    next(error)
  }
};

const getSingleTask = async (req, res, next) => {};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  getCreateTask,
  editTask,
  getEditTask,
  deleteTask,
};
