import React from 'react'

function TodoListItems(todos) {

  // const todos = [{ text: '', status: '' }]


  const todoList = todos.length ? (
    todos.map(todos => (
      <div className={todos.status} >
        <div className='TextBoxItem'>{todos.text}</div><span className="ImgBoxItem"></span>
      </div>)))
    : (
      null
    )
  return (
    { todoList }
  )
}
export default TodoListItems
