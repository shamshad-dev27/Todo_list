import { useContext, useState } from "react";
import todoDispatchContext from "../../Context/todoDispatchContext";


function AddTodo(){
    const [inputText,setinputText]=useState('');
const {dispatch}=useContext(todoDispatchContext);
    return (
        <div>
            <input type="text" 
            placeholder="Add your next todo"  
            value={inputText}
            onChange={e=>setinputText(e.target.value)}
            />
            <button onClick={()=>{
                inputText.length>0&&dispatch({type:'add_todo',payload:{todoText: inputText}})
                setinputText('');
            }}
            >Add</button>
        </div>
    )
}
export default AddTodo;