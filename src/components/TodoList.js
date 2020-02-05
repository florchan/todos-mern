import React from 'react'
import TodoListItems from './TodoListItems'

export default function TodoList({ todos, changeStatus, deleteTodo, getId }) {

  return (
    <div className='todoBox' onClick={changeStatus}>
      <TodoListItems getId={getId} todos={todos} changeStatus={changeStatus} deleteTodo={deleteTodo} />
    </div>
  )
}

