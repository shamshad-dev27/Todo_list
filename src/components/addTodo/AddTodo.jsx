import { useState } from "react";

function AddTodo({updatelist}){
    const [inputText,setinputText]=useState('');
    return (
        <div>
            <input type="text" 
            placeholder="Add your next todo"  
            value={inputText}
            onChange={e=>setinputText(e.target.value)}
            />
            <button onClick={()=>{
                inputText.length>0&&updatelist(inputText);
                setinputText('');
            }}
            >Add</button>
        </div>
    )
}
export default AddTodo;