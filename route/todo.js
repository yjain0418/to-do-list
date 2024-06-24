const router = require('express').Router();
const todo = require('../model/todo')

//routes
router.post('/add/task', (req, res) => {
    const { task } = req.body;
    const newTodo = new todo({todo : task})

    //save the task
    newTodo.save().then(()=>{
        console.log("Success");
        res.redirect('/')
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;