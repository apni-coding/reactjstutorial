import { actions } from "./todoReducer";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    message: ""
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.message = ""
        }
    },
    // extraReducers:{
    //     "todo/add":(state, action)=>{
    //         state.message = "Todo is created"
    //     }
    // }
    // extraReducers: (builder) => {
    //     builder.addCase(actions.add, (state, action) => {
    //         state.message = "Todo is created"
    //     })
    // }
    extraReducers:{
        // [key] : value
        [actions.add] : (state, action)=>{
            state.message = "Todo is created"
        }
    }
});

export const notificationReducer = notificationSlice.reducer;

export const notificationAction = notificationSlice.actions;