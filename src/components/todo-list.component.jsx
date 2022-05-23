import { Fragment } from "react";
import ToDoItem from "./todo-item.component";

const ToDoList = ({todoList, removeTodo}) => {
    return (
      <div>
        {todoList.length > 0 && todoList.map(todo => {
          return (
              <Fragment key={todo}>
                  <ToDoItem todo={todo} removeTodo={removeTodo} />
              </Fragment>
          )  
        })}
      </div>
    );
  }
  
  export default ToDoList;