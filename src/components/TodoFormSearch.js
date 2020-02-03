import React, { useState } from 'react'

function TodoFormSearch({ filterTodo }) {

  const [todo, setTodos] = useState('');

  const handleChange = (e) => {
    setTodos(e.target.value)
    filterTodo(todo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log(todo)

  return (
    <div className='SearchBox'>
      <form className='Form' onSubmit={handleSubmit}>
        <input name='Input' type="text" onChange={handleChange} value={todo} />
      </form>
    </div>
  )
}

export default TodoFormSearch
