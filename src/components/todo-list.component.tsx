import React, { Fragment, FC } from "react";
import ToDoItem from "./todo-item.component";
import {Todo} from '../App'

export interface TodoListProps {
  todoList: Todo[]
  removeTodo: (todo: Todo) => void 
}

const ToDoList: FC<TodoListProps> = ({todoList, removeTodo}) => {
    return (
      <div>
        {todoList.length > 0 && todoList.map(todo => {
          return (
              <Fragment key={todo.id}>
                  <ToDoItem todo={todo} removeTodo={removeTodo} />
              </Fragment>
          )  
        })}
      </div>
    );
  }
  
  export default ToDoList;