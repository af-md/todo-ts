import { useState } from 'react';

const InputSection = ({ saveTodo, todos }) => {
    const [val, setVal] = useState('')
    const addTodo = () => {
        if (todos.filter(item => item.val === val).length > 0) {
            setVal('');
            alert('todo already exists') 
        } else {
            const id = todos.length + 1;
            saveTodo({ val, id})
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