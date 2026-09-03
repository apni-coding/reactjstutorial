const redux = require('redux');

// Actions Type
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action Creators
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleToDo = (index) => ({ type: TOGGLE_TODO, index });

// Initial State
const inititalState = {
    todo: [],
}

// Reducers
function todoReducer(state = inititalState, action) {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        text: action.text,
                        complted: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todo.map((todo, i)=>{
                    if(i === action.index){
                        todo.complted = !todo.complted;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }

}