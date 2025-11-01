import { useContext } from "react";
import Todo from "../Todo/Todo"
import TodoContext from "../../Context/TodoContext";
import todoDispatchContext from "../../Context/todoDispatchContext";
function TodoList(){
const {list}=useContext(TodoContext);
const {dispatch}=useContext(todoDispatchContext);

function onFinished(todo,isFinited){
             dispatch({type:'isFinite_todo',payload:{todo,isFinited}});
         }


 function onDelete(todo){
dispatch({type:'Delete_todo',payload:{todo}});
 }
  

 function onEdit(todo,EditData){
           dispatch({type:'Edit_todo',payload:{todo,EditData}});
         }
    return(
        <div>
        {list.length>0&& list.map(todo=><Todo 
        key={todo.id}
        isFinish={todo.finished}
         TodoData={todo.todoData}
         id={todo.id}
         changeFinish={(isFinited)=>onFinished(todo,isFinited)}
         onDelete={()=> onDelete(todo)}
         onEdit={(EditData)=>onEdit(todo,EditData)}
         />)}
        </div>
    )
}
export default TodoList;