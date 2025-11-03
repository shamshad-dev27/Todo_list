import { useState } from "react";
import './Todo.css'
import { MdEdit } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function Todo({TodoData,isFinish,changeFinish,onDelete,onEdit}){
    const[finished,setfinished]=useState(isFinish);
    const[isEditing,setisEditing]=useState(false);
    const[textEdit,settextEdit]=useState(TodoData)
    return (
        <div className="py-2 px-3 text-black rounded-3xl border-2 border-brown-500 tracking-wide space-x-1 flex flex-row  items-center hover:scale-[1.02] w-70 justify-between ">
        <div className="flex flex-row items-center space-x-1 ">
            <input type="checkbox" checked={finished} onChange={e=>{
        setfinished(e.target.checked)
        changeFinish(e.target.checked)
        }
        }
         className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full cursor-pointer
           transition-all duration-200 checked:bg-blue-500 "/>
        {isEditing? <input type="text" className=" border-none focus:outline-none " value={textEdit} onChange={e => settextEdit(e.target.value)} />:<span>{TodoData}</span> }
        </div>
        <div  className="flex flex-row items-center space-x-1">
            <button onClick={()=>{
            setisEditing(!isEditing);
            onEdit(textEdit);
        }}>
            {(!isEditing)?<MdEdit  className="w-5 h-5" />:<MdOutlineSaveAlt className="w-5 h-5" />}
            </button>
        <button onClick={onDelete} ><MdDelete  className="w-5 h-5" /></button>
        </div>
        </div>
    )
}
 export default Todo;