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

router.route('/:id').put((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      console.log(req.body.status)
      todo.status = req.body.status
      todo.save()
        .then(() => res.json('Status update.'))
        .catch(err => res.status(400).json('Error:' + err))
    }

    )
    .catch(err => res.status(400).json('Errorrrrr:' + err))
})

module.exports = router;

