import { FiEdit, FiTrash } from "react-icons/fi";
import { MdCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Confirm from "./Shared/Confirm";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const Task = ({ task, setTasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [editableTask, setEditableTask] = useState(task);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const handleConfirmDelete = (id) => {
        const remainingTasks = tasks.filter(task => task?.id !== id);
        localStorage.setItem("tasks", JSON.stringify(remainingTasks));
        setTasks(JSON.parse(localStorage.getItem('tasks')))
        setIsConfirmOpen(false);
    };
    const handleStatus = (id) => {
        const updatableTaskIndex = tasks.findIndex(task => task?.id === id); // Finding the index of the task to be updated
        const updatedTasks = [...tasks]; // Creating a copy of the tasks array

        // Update the task data in the array
        updatedTasks[updatableTaskIndex] = {
            ...updatedTasks[updatableTaskIndex],
            status: updatedTasks[updatableTaskIndex].status === 'Pending' ? 'Completed' : 'Pending', // Updating status
        };

        // Update the localStorage with the status updated tasks array
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Updating the tasks state with the modified array in order render the ui
        setTasks(updatedTasks);
    };

    const priorityTitle = (task?.status === "Completed" && 'text-slate-500 font-extrabold') || (task?.priority === 'High' ? 'text-red-500' : task?.priority === 'Medium' ? 'text-yellow-500' : task?.priority === 'Low' ? 'text-green-500' : '')
    const priorityCard = (task?.status === "Completed" && 'null') || task?.priority === 'High' && 'bg-red-50 border-red-500';

    return (
        <div className={`border bg-slate-200 rounded-md p-5 w-full ${priorityCard}`}>
            <div className="flex justify-between items-center">
                <h1
                    className={`text-lg font-bold mb-3 flex items-center gap-2 ${priorityTitle}`}
                >
                    {task?.title}<MdCheckBox className={`h-5 w-5 text-green-500 ${task?.status !== "Completed" && 'hidden'}`} />
                </h1>
                <h1
                    className={`text-lg font-bold mb-3 flex items-center gap-2 text-green-500 ${task?.status !== "Completed" && 'hidden'}`}
                >
                    Completed
                </h1>

            </div>
            <p className="mb-3">{task?.description}</p>
            <div className="flex justify-between mt-3">
                <p>{task?.date}</p>
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setEditableTask(tasks.find(t => t.id === task?.id)),
                                console.log(tasks.find(t => t.id === task?.id)),
                                setShowModal((prev) => !prev)
                        }}
                        title="Edit"
                        className={`${task?.status === "Completed" && 'hidden'}`}
                    >
                        <FiEdit className="h-5 w-5 text-slate-500" />
                    </button>
                    <button
                        onClick={() => handleStatus(task?.id)}
                        title="Complete"
                    >
                        {task?.status === 'Completed' ? <MdCheckBox className="h-5 w-5 text-green-500" /> :
                            <MdOutlineCheckBoxOutlineBlank className="h-5 w-5 text-blue-500" />}
                    </button>
                    <button onClick={() => setIsConfirmOpen((prev) => !prev)} title="Delete">
                        <FiTrash className="h-5 w-5 text-red-500" />
                    </button>
                    <Confirm
                        isOpen={isConfirmOpen}
                        message="Are you sure you want to delete?"
                        onConfirm={() => handleConfirmDelete(task?.id)}
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