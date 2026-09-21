import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
};

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date()
            });
        },

        deleteNote: (state, action) => {
            state.notes = state.notes.filter(
                (_, idx) => idx !== action.payload
            );
        }
    }
});

// export function noteReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             return{
//                 ...state,
//                 notes: state.notes.filter((note, idx) => idx !== action.index)
//             }
//         default:
//             return state;
//     }
// }