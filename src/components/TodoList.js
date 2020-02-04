import React from 'react'
import TodoListItems from './TodoListItems'

export default function TodoList({ todos, changeStatus, deleteTodo }) {

  return (
    <div className='TodoBox' onClick={changeStatus}>
      <TodoListItems todos={todos} changeStatus={changeStatus} deleteTodo={deleteTodo} />
    </div>
  )
}

