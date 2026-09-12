import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import { Provider } from 'react-redux'
import './App.css';
import store from './store'

function App() {


  return (
    <div>
      
      <h1>To Do App</h1>
      {/* <XYZ /> */}
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
