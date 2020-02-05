import React, { useState } from 'react';
import TodoFormSearch from './components/TodoFormSearch'
import TodoFormAdd from './components/TodoFormAdd'
import TodoList from './components/TodoList'
import TodoFieldButtons from './components/TodoFieldButtons'


function App() {
  const [todos, setTodos] = useState([])
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState('')

  const addTodo = (value) => {
    if (value.trim() === "") {
      return;
    }
    const todo = { text: value, status: 'active', id: '' };
    todo.id = Math.random();
    setTodos(todos => ([...todos, todo]));
  }

  const filteredTodos = todos.filter(todo => todo.text.includes(searchKey) && todo.status.includes(status))

  const getId = (id) => {
    todos.forEach(todo => {

      if (todo.id == id && todo.status == 'active') {
        todo.status = 'completed'
      }
      else {
        if (todo.id == id && todo.status == 'completed') {
          todo.status = 'active'
        }
      }
    })
    setTodos([...todos]);
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos([...filteredTodos])
  }


  const todoComplete = (e) => {
    setStatus('completed')
  }

  const todoActive = (e) => {
    setStatus('active')
  }

  const todoAll = (e) => {
    setStatus('')
  }


  return (
    <div className="App">
      <div className="wrapper">
        <p className="todos">Todos</p>
        <TodoFormSearch handleChange={setSearchKey} searchKey={searchKey} />
        <TodoList getId={getId} todos={filteredTodos} deleteTodo={deleteTodo} />
        <TodoFormAdd handleSubmit={addTodo} />
        <TodoFieldButtons todos={todos} todoActive={todoActive} todoComplete={todoComplete} todoAll={todoAll} />
      </div>
    </div>
  );
}

export default App;
