import React from 'react'

function TodoFieldButtons({ todoAll, todoActive, todoComplete }) {

  return (
    <div className='buttonsBox'>
      <button className='buttonAll' onClick={todoAll}>All</button>
      <button className='buttonActive' onClick={todoActive}>Active</button>
      <button className='buttonCompleted' onClick={todoComplete}>Complete</button>
    </div>
  )
}

export default TodoFieldButtons
