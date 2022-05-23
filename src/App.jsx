import './App.css';
import { useState } from 'react';
import ToDoList from './components/todo-list.component';
import InputSection from './components/input-section.component';

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveTodo = (val) => {
    setTodos([...todos, val])
  }

  const removeTodo = (todo) => {
    const newTodos = todos.filter(item => item !== todo);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputSection saveTodo={saveTodo} todos={todos} />
      <ToDoList todoList={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
