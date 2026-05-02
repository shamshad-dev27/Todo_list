import AddTodo from "./components/addTodo/AddTodo"
import CustomRoute from "./customRoute/CustomRoute";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Addtodo,DelTodo,EditTodo,todoFinish } from "./action/todoAction";
import { Link } from "react-router-dom";
function App() {
    
    const dispatch=useDispatch();
    const bindAction=bindActionCreators({Addtodo,DelTodo,EditTodo,todoFinish},dispatch)
   return(
    <div className='flex  flex-col justify-center  items-center w-80 rounded-4xl space-y-5 p-6 bg-white shadow '>
        <h1 className="text-blue-500 tracking-wide font-semibold text-2xl">TASKFLOW</h1>
       <AddTodo addTodo={bindAction.Addtodo}/>
          <div className=" space-y-4">
           <div className=" space-x-2">
            <Link to="/"className=" px-3 rounded-4xl border-2 border-black hover:scale-[1.02] focus:bg-blue-500">All</Link>
           <Link to="/completed/" className="  px-3 rounded-4xl border-2 border-black  hover:scale-[1.02] focus:bg-blue-500">Completed</Link>
           <Link to="/Pending/" className="  px-3 rounded-4xl border-2 border-black  hover:scale-[1.02] focus:bg-blue-500">Pending</Link>
           </div>
            <CustomRoute/>
          </div>
       </div>

   )
}

export default App
