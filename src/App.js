import React, { useState } from 'react';
import TodoFormSearch from './components/TodoFormSearch'
import TodoFormAdd from './components/TodoFormAdd'
import TodoList from './components/TodoList'
import TodoFieldButtons from './components/TodoFieldButtons'


function App() {
  const [todos, setTodos] = useState([{ text: '', status: 'active' }])

  const addTodo = (value) => {
    const todo = { text: value, status: 'active' };
    todo.id = Math.random();
    setTodos(todos => ([...todos, todo]));
  }

  // const deleteTodo = (id) => {

  // }

  const filterTodos = () => {
    const filtertodos = todos.filter()
    setTodos(filtertodos);
  }

  // const addTodoBlock = ()

  return (
    <div className="App">
      <div className="wrapper">
        <TodoFormSearch filterTodo={filterTodos} />
        <TodoList />
        <TodoFormAdd handleSubmit={addTodo} />
        <TodoFieldButtons />
      </div>
    </div>
  );
}

export default App;
