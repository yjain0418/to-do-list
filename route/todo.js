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

.get('/delete/task/:_id', (req, res) => {
    const {_id} = req.params;

    todo.deleteOne({_id}).then(() => {
        console.log("Deleted");
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
})

.get('/update/task/:_id', (req, res) => {
    const {_id} = req.params;
    const value = req.query.value;

    todo.updateOne({ _id}, {$set : {todo : value}}).then(() => {
        console.log("Updated");
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;