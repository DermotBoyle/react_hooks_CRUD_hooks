import React, { useState, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {

   const [todoText, setTodoText] = useState(null);

   const {state, dispatch} = useContext(TodosContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: "ADD_TODO", payload: todoText})
        setTodoText('')
    }


return(

    <form action="" className="flex justify-center" onSubmit={handleSubmit}>
        <input
        onChange={event => setTodoText(event.target.value)}
        type="text" placeholder="Enter Todo" className="border-black border-solid border-2 my-5 h-10"
        value={todoText}/>
    </form>
)

}