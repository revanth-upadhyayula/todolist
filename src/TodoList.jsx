import React from 'react';

const TodoList = ({todos,deleteHandler})=>{
    return(
        todos?.length>0 ? (
            <div className='todoList'>
                {todos.map((todo,index)=>
                <div key={index} className='todo'>
                    <ul>
                        <li className='li'> <p className='text'>{todo}</p> <button className='delete' onClick={()=>deleteHandler(index)}>delete</button> </li>
                    </ul>
                </div>)}
            </div>
        ) : (
            <div className='noTodos'>
                <p>No todos</p>
            </div>
        )
    )
}

export default TodoList;