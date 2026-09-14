// const redux = require('redux');
import { createStore, combineReducers } from "redux";
import {todoReducer} from "./redux/reducers/todoReducer";
import { noteReducer } from "./redux/reducers/noteReducer";


const result = combineReducers({
    todoReducer,
    noteReducer
})

const store = createStore(result);

export default store;