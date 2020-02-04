import React, { useState } from 'react'

function TodoListItems({ todos, changeStatus, deleteTodo }) {
  const [status, setStatus] = useState()
  const [id, setId] = useState()

  const getStatus = (e) => {
    changeStatus(status)
  }

  const getDelete = (e) => {
    deleteTodo(id)
  }

  const todoList = todos && todos.length ? (
    todos.map(todos => (
      <div className={todos.status} id={Math.random()} onClick={getStatus}>
        <div className='TextBoxItem' onClick={changeStatus}>{todos.text}</div> <span className="ImgBoxItem" onClick={getDelete}>image</span>
      </div >)))
    : (
      null
    )
  return (
    todoList
  )
}
export default TodoListItems
