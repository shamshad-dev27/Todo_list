import { useState } from "react";

function Todo({TodoData,isFinish,changeFinish,onDelete,onEdit}){
    const[finished,setfinished]=useState(isFinish);
    const[isEditing,setisEditing]=useState(false);
    const[textEdit,settextEdit]=useState(TodoData)
    return (
        <div>
        <input type="checkbox" checked={finished} onChange={e=>{
        setfinished(e.target.checked)
        changeFinish(e.target.checked)
        }
        }/>
        {isEditing? <input type="text" value={textEdit} onChange={e => settextEdit(e.target.value)} />:<span>{TodoData}</span> }
        <button onClick={()=>{
            setisEditing(!isEditing);
            onEdit(textEdit);
        }}>
            {(!isEditing)?'Edit':'Save'}
            </button>
        <button onClick={onDelete}>Delete</button>
        </div>
    )
}
 export default Todo;