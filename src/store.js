// const redux = require('redux');
// import { createStore, combineReducers } from "redux";
import {todoReducer} from "./redux/reducers/todoReducer";
import { noteReducer } from "./redux/reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./redux/reducers/notificationReducer";
import { loggerMiddlware } from "./redux/middlewares/loggerMiddleware";


// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// const store = createStore(result);

// export default store;

export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[loggerMiddlware]
})