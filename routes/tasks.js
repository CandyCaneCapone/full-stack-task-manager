const express = require("express")
const router = express.Router()

const controllers = require("../controllers/task.js")

router.get("/" , controllers.getAllTasks)
router.get("/task/:id" , controllers.getSingleTask)

router.get("/add" , controllers.getCreateTask)
router.post("/add" , controllers.createTask)

router.get("/edit/:id" , controllers.getEditTask)
router.post("/edit/:id" , controllers.editTask)

router.post("/delete/:id" , controllers.deleteTask)

module.exports = router ; 