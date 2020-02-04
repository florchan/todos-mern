import React, { useState } from 'react';
import TodoFormSearch from './components/TodoFormSearch'
import TodoFormAdd from './components/TodoFormAdd'
import TodoList from './components/TodoList'
import TodoFieldButtons from './components/TodoFieldButtons'


function App() {
  const [todos, setTodos] = useState([{ text: '', status: 'active' }])
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState('active')

  const addTodo = (value) => {
    const todo = { text: value, status: 'active' };
    todo.id = Math.random();
    setTodos(todos => ([...todos, todo]));
  }


  const filteredTodos = todos.filter(todo => todo.text.includes(searchKey) && todo.status.includes(status))


  const todoComplete = (e) => {
    setStatus('complete')
  }

  const todoActive = (e) => {
    setStatus('active')
  }

  const todoAll = (e) => {
    setTodos(todos)
  }

  const changeStatus = (status) => {
    (status == 'active') ?
      'complete'
      :
      'active'
  }


  const deleteTodo = (id) => {
    const deleteTodo = todos.filter(todo => { return todo.id !== id })
  }



  return (
    <div className="App">
      <div className="wrapper">
        <TodoFormSearch handleChange={setSearchKey} searchKey={searchKey} />
        <TodoList todos={filteredTodos} changeStatus={changeStatus} deleteTodo={deleteTodo} />
        <TodoFormAdd handleSubmit={addTodo} />
        <TodoFieldButtons todos={todos} todoActive={todoActive} todoComplete={todoComplete} todoAll={todoAll} />
      </div>
    </div>
  );
}

export default App;
