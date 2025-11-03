import { Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
import Completed from "../components/TodoList/Completed";
import Pending from "../components/TodoList/Pending";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { Addtodo, DelTodo, EditTodo, todoFinish } from "../action/todoAction";


function CustomRoute(){
    const dispatch=useDispatch();
    const bindAction=bindActionCreators({Addtodo,DelTodo,EditTodo,todoFinish},dispatch)
    return (
      <Routes>
        <Route path="/" element={<TodoList DelTodo={bindAction.DelTodo} EditTodo={bindAction.EditTodo} todoFinish={bindAction.todoFinish}  />}/>
        <Route path="/completed/" element={<Completed DelTodo={bindAction.DelTodo} EditTodo={bindAction.EditTodo} todoFinish={bindAction.todoFinish} />}/>
        <Route path="/Pending/" element={<Pending DelTodo={bindAction.DelTodo} EditTodo={bindAction.EditTodo} todoFinish={bindAction.todoFinish}  />}/>
      </Routes>

    );
}
export default CustomRoute;