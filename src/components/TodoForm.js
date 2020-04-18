import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {

   const [todoText, setTodoText] = useState(null);

   const {state: {currentTodo = {} }, dispatch} = useContext(TodosContext);

   useEffect(() => {

if(currentTodo.text){
    setTodoText(currentTodo.text)
}else {
    setTodoText('');
}
   }, [currentTodo.id])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(currentTodo.text){
            dispatch({type: 'UPDATE_TODO', payload: todoText})
        } else {
            dispatch({type: "ADD_TODO", payload: todoText})
            setTodoText('')
        }

       
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