
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";


export const store = redux.createStore(todoReducer);

