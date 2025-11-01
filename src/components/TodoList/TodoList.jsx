import { useContext } from "react";
import Todo from "../Todo/Todo"
import TodoContext from "../../Context/TodoContext";
function TodoList(){
    const {list,setlist}=useContext(TodoContext);
    return(
        <div>
        {list.length>0&& list.map(todo=><Todo 
        key={todo.id}
        isFinish={todo.finished}
         TodoData={todo.todoData}
         id={todo.id}
         changeFinish={(isFinited)=>{
             const updatelist=list.map(t=>{
                if(t.id ==todo.id){
                    todo.finished=isFinited;
                }
                return t;
         });
         setlist(updatelist);
         }}
         onDelete={()=>{
            const updatelist=list.filter(t=>t.id!=todo.id);
            setlist(updatelist);
         }}
         onEdit={(EditData)=>{
            const updatelist=list.map(t=>{
                if(t.id ==todo.id){
                    todo.todoData=EditData;
                }
                return t;
         });
         setlist(updatelist);
         }}
         />)}
        </div>
    )
}
export default TodoList;