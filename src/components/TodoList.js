import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList () {

const {state, dispatch} = useContext(TodosContext);
const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing to do"

return( <div className="container mx-auto max-w-md text-center font-mono ">
    <h1 className="text-bold text-5xl my-2">{title}</h1>
    <ul className="list.reset text-white p-0">
        {state.todos.map(todo => (
            <li key={todo.id}
             className="flex items-center bg-orange-500 border-black border-2 my-2 py-4">
                <span
                onDoubleClick={()=> dispatch({type: "TOGGLE_TODO", payload : todo})}
                className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-700"}`}>{todo.text}</span>
                <button>
                    <img src="https://icon.now.sh/edit/0050c5" alt="edit icon" className="h6"/>
                </button>
                 <button onClick={()=> dispatch({type: "DELETE_TODO", payload: todo})}>
                    <img src="https://icon.now.sh/delete/8b0000" alt="edit icon" className="h6"/>
                </button>
            </li>
                    ))}
    </ul>
</div>
)
}