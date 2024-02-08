import { useState } from "react";

const TaskForm = ({ title, isOpen, task, tasks, setTask, onSave, onClose, handleSubmit }) => {
    const [priority, setPriority] = useState('')
    return (
        <div className={`fixed inset-0 z-10 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-500 ${!isOpen && 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white p-8 rounded-md w-96">
                <h2 className="text-xl font-bold mb-4">{title ? title : 'Add'} Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Task Title..."
                            value={task.title}
                            onChange={(e) => setTask && setTask({ ...task, title: e.target.value })}
                            className="form_input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-semibold mb-1">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Task Description..."
                            value={task.description}
                            onChange={(e) => setTask && setTask({ ...task, description: e.target.value })}
                            rows="4"
                            className="form_textarea resize-none"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="priority" className="block font-semibold mb-1">Priority</label>
                        <select
                            onChange={(e) => setPriority(e.target.value)}
                            id="priority"
                            className="bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={priority || task?.priority}
                        >
                            <option value="" disabled hidden>Select Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => setTask && setTask({ ...task, priority: priority || task?.priority })} type="submit" className="px-4 py-2  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md mr-2">Save</button>
                        <button type="button" onClick={() => {
                            onClose(), setTimeout(() => {
                                setPriority(task.priority)
                            }, 250)
                        }} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default TaskForm;