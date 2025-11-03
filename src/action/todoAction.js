import { ADDTODO,DELTODO,EDITTODO,FINISHTODO } from "../action"
export const todoFinish=(todo,isFinited)=>({type:FINISHTODO,payload:{todo,isFinited}})
export const Addtodo=(inputText)=>({type:ADDTODO,payload:{todoText: inputText}})
export const EditTodo=(todo,EditData)=>({type:EDITTODO,payload:{todo,EditData}})
export const DelTodo=(todo)=>({type:DELTODO,payload:{todo}})