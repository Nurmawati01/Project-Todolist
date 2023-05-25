import { Link, Outlet } from "react-router-dom"
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";
import "./Layout.css"

const Layout = () => {
    const userInput = useSelector(state => state.todos.userInput);
    const dispatch = useDispatch();

    const handleCreateTodo = (e) => {
        e.preventDefault();
        dispatch(actions.createTodo())
    }

    const handleSetUserInput = (userInput) => {
        dispatch(actions.setUserInput({ userInput }))
    }

    return (

        <div >
                <div id="judul1" className="row text-center p-10  ">
                    <div className="col">
                        <h1 className="text-4xl">What have you done </h1>
                        <h1 className="text-4xl">for the environment today?</h1>
                    </div>
                </div>
            
            <form className="flex gap-2 p-2" onSubmit={handleCreateTodo}>
                <input 
                    id="input1"
                    type="text"
                    value={userInput}
                    onChange={(e) => handleSetUserInput(e.target.value)}
                    placeholder="Enter your todo message"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <input id="btnadd" type="submit" className="btn" value="ADD" />
            </form>
            <nav id="nav-ul" >
                <ul  className="flex gap-2 p-2">
                    <li id="all1" className="bg-purple-500 hover:bg-purple-1000 text-white">
                        <Link to={"/"}>All</Link>
                    </li>
                    <li id="active1" className="bg-purple-500 hover:bg-purple-1000 text-white">
                        <Link to={"/active"}>Active</Link>
                    </li>
                    <li id="completed1" className="bg-purple-500 hover:bg-purple-1000 text-white">
                        <Link to={"/completed"}>Completed</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout