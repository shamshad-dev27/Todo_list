
import { useReducer, useState } from "react"
import AddTodo from "./components/addTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import TodoContext from "./Context/TodoContext"
import todoDispatchContext from "./Context/todoDispatchContext"
import todoRecducer from "./TodoReducer/todoReducer"


function App() {
   // const [list,setlist]=useState([
   //          {id: 1, todoData: 'todo1',finished:false},
   //          {id: 2, todoData: 'todo2',finished:false}
   //      ])
   const [list, dispatch]=useReducer(todoRecducer,[])
   return(
    <TodoContext.Provider value={{list}}>
      <todoDispatchContext.Provider value={{dispatch}}>
       <AddTodo/>
       <TodoList/>
    </todoDispatchContext.Provider>
    </TodoContext.Provider>
   )
}

export default App
