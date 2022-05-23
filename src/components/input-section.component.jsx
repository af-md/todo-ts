import { useState } from 'react';

const InputSection = ({ saveTodo, todos }) => {
    const [val, setVal] = useState('')
    const addTodo = () => {
        if (todos.filter(item => item === val).length > 0) {
            setVal('');
            alert('todo already exists') 
        } else {
            saveTodo(val);
            setVal('');
        }
    }

    const handleChange  = (e) => {
        setVal(e.target.value)
    }
  return (
    <>
        <input onChange={handleChange} value={val}/>
        <button onClick={addTodo}>
            Add Todo
        </button>
            
    </>
  );
}

export default InputSection;