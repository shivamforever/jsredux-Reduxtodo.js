import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/reducers/todoSlice.js";

const TaskList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <table className="table table-responsive-xxl table-sm table-transparent table-borderless">
            <thead className='sticky-top bg-white'>
                <tr>
                    <th scope="col">#</th>
                    <th className='mh' scope="col">Task</th>
                    <th className='mh' scope="col">Due Date</th>
                    <th scope="col">Status/Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo, index) => {
                        return (
                            <tr key={index} className={todo.is_completed ? "text-decoration-line-through text-success my-2" : "my-2"}>
                                <th>{index + 1}</th>
                                <td className='mh'>{todo.task.title}</td>
                                <td className='mh'>{todo.task.dueDate}</td>
                                <td><button className='mx-1 border-0 bg-transparent' onClick={() => handleToggleComplete(todo.id)}>{todo.is_completed ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-success bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    </svg>}
                                </button>
                                    <button className='mx-1 border-0 bg-transparent' onClick={() => handleDeleteTodo(todo.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-danger bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default TaskList