import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
function AddTodo({addTodo}){
    const [inputText,setinputText]=useState('');
    return (
        <div className="space-x-2 flex flex-row justify-center items-center">
            <input type="text" 
            placeholder="Add a new task..."  
            value={inputText}
            onChange={e=>setinputText(e.target.value)}
                 className="py-2 px-4 text-black rounded-3xl border-2 border-brown-500 hover:scale-[1.02] font-semibold tracking-wide"/>
            <button onClick={()=>{
                inputText.length>0&&addTodo(inputText)
                setinputText('');
            }}
             className=" text-white" ><IoIosAdd className="w-9 h-9 bg-blue-600 rounded-full"  />  </button>
        </div>
    )
}
export default AddTodo;