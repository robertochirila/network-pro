const router = require("express").Router();
let Tasks = require("../models/Tasks");
//const auth = require('../middleware/auth')

router.route("/get").get((req, res) => {
  Tasks.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*router.post("/add", auth, (req, res) => {
  const name = req.body.name;
  const category = req.body.category;

  const newTasks = new Tasks({
    name,
    category,
  });

  newTasks
    .save()
    .then(() => res.json("Task added succesfully"))
    .catch((err) => res.status(400).json("Error: ", +err));
});*/
/*router.route('/add', auth).post((req, res) => {
    const name = req.body.name
    const category = req.body.category
    const price = req.body.price

    const newExpense = new Expenses({
        name,
        category,
        price
    })

    console.log(newExpense)


    newExpense.save()
        .then(() => res.json('Expense added succesfully'))
        .catch(err => res.status(400).json('Error: ', +err))

})*/
/*router.delete("/:id", auth, (req, res) => {
  Tasks.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});*/

/*router.route('/:id', auth).delete((req, res) => {
    Expenses.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;
