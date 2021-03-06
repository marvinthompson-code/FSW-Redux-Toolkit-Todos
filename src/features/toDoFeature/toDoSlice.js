import { createSlice } from "@reduxjs/toolkit"

let nextTodoId = 0 

export const toDoSlice = createSlice({
    name: "toDo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => [...state, {...action.payload, id: nextTodoId++} ],
        toggleTodo: (state, action) => state.map(todo =>
            (todo === action.payload)
              ? {...todo, completed: !todo.completed}
              : todo)
    }
})


// const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
//   }


export const { addTodo, toggleTodo } = toDoSlice.actions; 
export default toDoSlice.reducer;

