function todoRecducer(state, action){
 if(action.type=='add_todo'){
 let todoText=action.payload.todoText;
 return [ ...state ,{id :state.length+1, 
    todoData: todoText,
    finished:false}]
 }
 else if(action.type== 'Edit_todo')
{
 let todo =action.payload.todo;
 let EditData=action.payload.EditData;
 const updatelist=state.map(t=>{
                if(t.id ==todo.id){
                    todo.todoData=EditData;
                }
                return t;
         });
         return  updatelist;


 }else if(action.type=='Delete_todo'){
    let todo =action.payload.todo;
    const updatelist=state.filter(t=>t.id!=todo.id);
            return updatelist;
 }else if(action.type== 'isFinite_todo'){
    let todo=action.payload.todo;
    let isFinited=action.payload.isFinited;
    const updatelist=state.map(t=>{
                if(t.id ==todo.id){
                    todo.finished=isFinited;
                }
                return t;
         });
         return updatelist;
 }else{
    return state;
 }
}

export default todoRecducer;