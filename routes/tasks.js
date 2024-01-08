const express = require("express")
const router = express.Router()

const controllers = require("../controllers/task.js")

router.get("/" , controllers.getAllTasks)
router.get("/:id" , controllers.getSingleTask)
router.post("/" , controllers.createTask)
router.patch("/:id" , controllers.editTask)
router.delete("/:id" , controllers.deleteTask)

module.exports = router ; 