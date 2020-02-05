import React, { useState } from 'react'

function TodoFormAdd({ handleSubmit }) {

  const [todo, setTodo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(todo);
    setTodo('')
  }

  console.log(todo)

  return (
    <div className='addFormBox'>
      <form className='form' onSubmit={onSubmit}>
        <input placeholder="Add" className='input' type="text" onChange={e => setTodo(e.target.value)} value={todo} />
      </form>
    </div>
  )
}

export default TodoFormAdd
