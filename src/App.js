import React from 'react';
import TodoList from './TodoList';
import { useState } from 'react';
import './App.css'



const App=()=>{
    const [task,setTask]=useState('');
    const [todos,setTodos]=useState([]);


    const changeHandler=e=>{
        setTask(e.target.value);
    }

    const submitHandler=()=>{
        // console.log(task);
        if(task!=="")
        {
            const newTodos=[...todos,task];
            setTodos(newTodos);
            setTask('');
        }
    }

    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=> index!==indexValue)
        setTodos(newTodos);
    }
    return(
        
        <div className='container'>
            <header>
                ToDo Management Application
            </header>
            <div className='search' >
                <input className='task' name='search' placeholder='Enter tasks...' value={task} onChange={changeHandler}></input>
                <button name='Add' className='add' onClick={()=>submitHandler()}>Add</button>
            </div>
            <div className='List'>
                <TodoList todos={todos} deleteHandler= {deleteHandler} />
            </div>
        </div>
    )
}

export default App;