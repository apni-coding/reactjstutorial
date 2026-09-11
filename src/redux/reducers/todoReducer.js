import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const intitialState = {
    todos: [
        {
            text: "Metting at 9",
            completed: false
        },
        {
            text: "Lunch at 2",
            completed: true
        }
    ]
}

function todoReducer(state = intitialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    text: action.text,
                    completed: false
                }]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i == action.index) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }

        default:
            return state
    }

}
export default todoReducer;