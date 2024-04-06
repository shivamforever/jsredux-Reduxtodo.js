import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../features/reducers/todoSlice.js";

const TaskInput = () => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (title && dueDate) {
            dispatch(addTodo({ title, dueDate }));
            setTitle("");
            setDueDate("");
        }
        else {
            alert("All fields are mandatory to fill.")
        }
    };

    return (
        <div className='d-grid gap-2'>
            <div className="mb-3">
                <label htmlFor="task_title" className="form-label">Task</label>
                <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" className="form-control" id="task_title" placeholder="Enter task here" />
            </div>
            <div className="mb-4">
                <label htmlFor="due_date" className="form-label">Due Date</label>
                <input value={dueDate} onChange={(event) => setDueDate(event.target.value)} type="date" className="form-control" id="due_date" placeholder="Enter due date here" />
            </div>
            <button className='btn btn-dark' onClick={() => handleAddTodo()}>Add Task</button>
        </div>
    )
}

export default TaskInput