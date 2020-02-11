const router = require('express').Router();
let Todo = require('../todo.model')

router.route('/').get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch(err => res.status(400).json('Error:' + err))
});

router.route('/').post((req, res) => {
  const text = req.body.text;
  const status = req.body.status;
  const id = req.body.id;

  const newTodo = new Todo({
    text,
    status,
    id
  })
  newTodo.save()
    .then(() => res.json('Todos added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req, res) => {
  Todo.findById(req.params.id)
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todos deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;

