import uuidv4 from 'uuid/v4'


export default function todosReducer(state, action){
    switch(action.type){

        case "TOGGLE_TODO" :
           const toggledTodos = state.todos.map(t => 
                t.id === action.payload.id ? {...action.payload, complete :
                !action.payload.complete}: t
                )
                return{
                    ...state,
                    todos: toggledTodos
                }
        case "DELETE_TODO" :
            const updatedList = state.todos.filter(t =>
                t.id !== action.payload.id)
                return{
                    ...state,
                    todos: updatedList
                }

        case "ADD_TODO" :
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            }

        const addedTodos = [...state.todos, newTodo];
            return{
                ...state,
                todos: addedTodos
             }

    

        default : return state;
    }
}