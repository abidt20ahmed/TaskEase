import { FiEdit, FiTrash } from "react-icons/fi";
import { MdCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Confirm from "./Confirm";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const Task = ({ task, setTasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [editableTask, setEditableTask] = useState(task);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const handleConfirmDelete = (id) => {
        const remainingTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(remainingTasks));
        setTasks(JSON.parse(localStorage.getItem('tasks')))
        setIsConfirmOpen(false);
    };
    const handleStatus = (id) => {
        const updatableTaskIndex = tasks.findIndex(task => task.id === id); // Find the index of the task to be updated
        const updatedTasks = [...tasks]; // Create a copy of the tasks array

        // Update the task data in the array
        updatedTasks[updatableTaskIndex] = {
            ...updatedTasks[updatableTaskIndex], // Spread the existing task data
            status: updatedTasks[updatableTaskIndex].status === 'Pending' ? 'Completed' : 'Pending', // Update the status
        };

        // Update the localStorage with the modified tasks array
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Optionally, update the tasks state with the modified array
        setTasks(updatedTasks);
    };

    return (
        <div className="bg-slate-200 rounded-md p-5 w-full">
            <h1
                className={`text-lg font-bold mb-3  ${task.priority === 'High' ? 'text-red-500' : ''
                    } ${task.priority === 'Medium' ? 'text-yellow-500' : ''} ${task.priority === 'Normal' ? 'text-green-500' : ''
                    }`}
            >
                {task?.title}
            </h1>
            <p className="mb-3">{task?.description}</p>
            <div className="flex justify-between mt-3">
                <p>{task?.date}</p>
                <div className="flex gap-3">
                    <button
                        onClick={() => handleStatus(task.id)}
                        title="Complete"
                    >
                        {task.status === 'Completed' ? <MdCheckBox className="h-5 w-5 text-green-500" /> :
                            <MdOutlineCheckBoxOutlineBlank className="h-5 w-5 text-blue-500" />}
                    </button>
                    <button
                        onClick={() => {
                            setEditableTask(tasks.find(t => t.id === task.id)),
                                console.log(tasks.find(t => t.id === task.id)),
                                setShowModal((prev) => !prev)
                        }}
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
            <EditTaskModal
                isOpen={showModal}
                onSave={setTasks}
                onClose={() => setShowModal((prev) => !prev)}
                tasks={tasks}
                task={editableTask}
                setTask={setEditableTask}
            />
        </div>
    );
};

export default Task;