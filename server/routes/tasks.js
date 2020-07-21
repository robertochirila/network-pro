const router = require("express").Router();
let Tasks = require("../models/Tasks");
//const auth = require('../middleware/auth')

router.route("/").get((req, res) => {
  Tasks.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});
// REMEMBER TO PASS AUTH AS AN ARGUMENT TO FUNCTION

router.post('/add', async (req, res) => {
  const name = req.body.taskName;
  const category = req.body.taskCategory;
  const newTasks = new Tasks({
    name,
    category,
  });

  try {
    const item = await newTasks.save();
    if (!item) throw Error('Something went wrong saving the item');

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

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
