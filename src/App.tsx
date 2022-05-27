import './App.css';
import React, { useState, FC } from 'react';
import ToDoList from './components/todo-list.component';
import InputSection from './components/input-section.component';

export interface Todo {
  id: number,
  val: string,
}
const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (todo: Todo) => {
    const newTodos = todos.filter(item => item.id !== todo.id);
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
