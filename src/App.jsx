
import { useState } from "react"
import AddTodo from "./components/addTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import TodoContext from "./Context/TodoContext"


function App() {
   const [list,setlist]=useState([
            {id: 1, todoData: 'todo1',finished:false},
            {id: 2, todoData: 'todo2',finished:false}
        ])
   return(
    <TodoContext.Provider value={{list,setlist}}>
    <AddTodo updatelist={(todo)=> setlist([ ...list ,{id :list.length+1, todoData: todo,finished:false}])}/>
    <TodoList />
    </TodoContext.Provider>
   )
}

export default App
