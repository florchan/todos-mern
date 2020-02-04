import React from 'react'

function TodoFormSearch({ handleChange, searchKey }) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log('searchKey', searchKey)

  const onChange = (e) => handleChange(e.target.value);

  return (
    <div className='searchBox'>
      <form className='form' onSubmit={handleSubmit}>
        <input name='input' type="text" onChange={onChange} value={searchKey} />
      </form>
    </div>
  )
}

export default TodoFormSearch
