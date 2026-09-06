// Actions Constant
export const ADD_TODO = "Add Todo";
export const TOGGLE_TODO = "Toggle Todo"

// Action Cretors
export const addTodo = (text)=>({text, type:ADD_TODO});
export const toggleTodo = (index)=>({index, type:TOGGLE_TODO})