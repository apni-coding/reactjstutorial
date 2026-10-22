import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")



const initialState = {
    todos: [
    ]
}

export const getIntitialStateAsync = createAsyncThunk("todo/getInitialState",
    //     (arg, thunkAPI) => {
    //     axios.get("http://localhost:4100/api/todos").then((res) => {
    //         console.log(res.data)
    //         thunkAPI.dispatch(actions.setIntialState(res.data))
    //     })
    // }
    () => {
        return axios.get("http://localhost:4100/api/todos");
    }
)

export const addTodoAsync = createAsyncThunk("todo/addTodo",
    async (payload) => {
        const response = await fetch("http://localhost:4100/api/todos", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                text: payload,
                completed: false
            })
        })
        return response.json()
    }
)

const todoSlice = createSlice({
    initialState: initialState,
    name: "todo",
    reducers: {
        setIntialState: (state, action) => {
            state.todos = [...action.payload]
        },
        // this is add action
        add: (state, action) => {
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if (i == action.payload) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getIntitialStateAsync.fulfilled, (state, action) => {
            state.todos = [...action.payload.data]
        })
        .addCase(addTodoAsync.fulfilled, (state, action)=>{
           state.todos.push(action.payload)
        })
    }
})

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

//Reducers using redux
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }