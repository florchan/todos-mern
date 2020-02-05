import React from 'react'

function TodoListItems({ todos, getId, deleteTodo }) {

  const todoList = todos && todos.length ? (
    todos.map(todo => (
      <div className={todo.status} key={todo.id}>
        <div className='textBoxItem' onClick={() => getId(todo.id)}>{todo.text}</div> <span className="imgBoxItem" onClick={() => deleteTodo(todo.id)}></span>
      </div >)))
    : (
      null
    )
  return (
    todoList
  )
}
export default TodoListItems
