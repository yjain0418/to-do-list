const router = require('express').Router()
const todo = require('../model/todo')

//routes will be here...
router.get("/", async(req, res) => {
    const allTask = await todo.find();
    res.render("index", {task : allTask})
})

module.exports = router;