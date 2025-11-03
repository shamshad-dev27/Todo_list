import Todo from "../Todo/Todo"
import {  useSelector } from "react-redux";


function Pending( {DelTodo,EditTodo,todoFinish}){
const list=useSelector((state)=>state.todo);

function onFinished(todo,isFinited){
            todoFinish(todo,isFinited);
         }


 function onDelete(todo){
    DelTodo(todo);
 }
  

 function onEdit(todo,EditData){
           EditTodo(todo,EditData);

         }
    return(
        <div className=" space-y-3 pb-5 ">
        {list.length>0&& list.map(todo=>todo.finished!=true&&<Todo 
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
export default Pending;