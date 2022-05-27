import React, { FC } from 'react';
import {Todo} from '../App'

interface TodoItemProps{
  todo: Todo
  removeTodo: (todo: Todo) => void
}

const ToDoItem : FC<TodoItemProps> = ({todo, removeTodo}) => {
    return (
      <div className="todo-item">
            <p>{todo.val}</p>
            <button onClick={() => removeTodo(todo)}>Remove</button>
      </div>
    
  );
}

export default ToDoItem;