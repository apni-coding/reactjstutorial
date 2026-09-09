// const redux = require('redux');
import redux from 'redux';
import todoReducer from './redux/reducers/todoReducer'

export const store = redux.createStore(todoReducer);