import { FiEdit, FiTrash } from "react-icons/fi";
import { MdCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Confirm from "./Confirm";
import { useState } from "react";

const Task = ({ task, setTasks }) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const handleConfirmDelete = (id) => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const remainingTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(remainingTasks));
        setTasks(JSON.parse(localStorage.getItem('tasks')))
        setIsConfirmOpen(false);
    };

    return (
        <div className="bg-slate-200 rounded-md p-5 w-full">
            <h1
                className={`text-lg font-bold mb-3  ${task.priority === 'high' ? 'text-red-500' : ''
                    } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${task.priority === 'low' ? 'text-green-500' : ''
                    }`}
            >
                {task?.title}
            </h1>
            <p className="mb-3">{task?.description}</p>
            <div className="flex justify-between mt-3">
                <p>{task?.date}</p>
                <div className="flex gap-3">
                    <button
                        title="Complete"
                    >
                        {/* <MdCheckBox className="h-5 w-5 text-green-500" /> */}
                        <MdOutlineCheckBoxOutlineBlank className="h-5 w-5 text-blue-500" />
                    </button>
                    <button
                        title="Edit"
                    >
                        <FiEdit className="h-5 w-5 text-slate-500" />
                    </button>
                    <button onClick={() => setIsConfirmOpen((prev) => !prev)} title="Delete">
                        <FiTrash className="h-5 w-5 text-red-500" />
                    </button>
                    <Confirm
                        isOpen={isConfirmOpen}
                        message="Are you sure you want to delete?"
                        onConfirm={() => handleConfirmDelete(task.id)}
                        onCancel={() => setIsConfirmOpen((prev) => !prev)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Task;