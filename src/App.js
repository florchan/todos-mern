import React, { useState, useEffect } from 'react';
import TodoFormSearch from './components/TodoFormSearch'
import TodoFormAdd from './components/TodoFormAdd'
import TodoList from './components/TodoList'
import TodoFieldButtons from './components/TodoFieldButtons'
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([])
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState('')


  async function getTodosMongo() {
    const response = await axios.get('http://localhost:3000')
    setTodos(response.data)
    console.log(response.data)
  }

  async function changeStatus(status, todo) {
    const ids = todo._id
    console.log(todo)
    console.log(status)
    console.log(ids)
    try {
      const response = await axios.put('http://localhost:3000/' + ids, { status });
      console.log("todo", response.data)
      console.log(todo)
    }
    catch (err) {
      console.log('Not todo', err)
    }
  }


  useEffect(() => {
    try {
      getTodosMongo()
    }
    catch (err) {
      console.log('Error', err)
    }
  }, [])


  async function addTodo(value) {
    if (value.trim() === "") {
      return;
    }
    const todo = { text: value, status: 'active', id: '' };
    todo.id = Math.random();
    try {
      const response = await axios.post('http://localhost:3000', todo)
      console.log("Todo: " + response.data)
    }
    catch (err) {
      console.log('Not todo', err)
    }
    setTodos(todos => ([...todos, todo]));
  }

  const filteredTodos = todos.filter(todo => todo.text.includes(searchKey) && todo.status.includes(status))

  async function getId(id) {
    todos.forEach(todo => {
      if (todo.id == id && todo.status == 'active') {
        todo.status = 'completed'
        changeStatus(todo.status, todo)
      }
      else {
        if (todo.id == id && todo.status == 'completed') {
          todo.status = 'active'
          changeStatus(todo.status, todo)
        }
      }
    })
    setTodos([...todos]);
  }

  async function deleteTodo(id) {
    const filterIdTodo = todos.filter(todo => todo.id === id)
    const filterNotIdTodo = todos.filter(todo => todo.id !== id)
    try {
      await axios.delete('http://localhost:3000/' + filterIdTodo[0]._id)
      setTodos([...filterNotIdTodo])
    }
    catch (err) {
      console.log('Not todo', err);
    }
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
