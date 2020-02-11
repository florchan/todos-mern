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

  async function addTodo(value) {
    if (value.trim() === "") {
      return;
    }
    const todo = { text: value, status: 'active', id: '' };
    todo.id = Math.random();
    await axios.post('http://localhost:3001', todo)
      .then(res => console.log("Todo: " + res.data))
      .catch(err => console.log('Not todo'));
    setTodos(todos => ([...todos, todo]));
  }

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(response => setTodos(response.data))
  }, [todos])


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

  async function deleteTodo(id) {
    const filteredTodos = todos.filter(todo => todo.id === id)
    await axios.delete('http://localhost:3001' + filteredTodos[0]._id)
      .then(res => console.log("Todo: " + res.data))
      .catch(err => console.log('Not todo'));
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
