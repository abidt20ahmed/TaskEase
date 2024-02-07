import TaskForm from "./TaskForm";

const TaskModal = ({ title, isOpen, task, tasks, setTask, onSave, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave((prev) => [...prev, task]);
        const jsonData = JSON.stringify([...tasks, task]);
        localStorage.setItem('tasks', jsonData);
        onClose()
        setTimeout(() => {
            setTask({
                id: Date.now().toString().substring(0, 10) + Math.random().toString(36).substring(2, 7),
                status: 'Pending',
                title: '',
                description: '',
                date: new Date().toLocaleDateString(),
                priority: 'Normal',
            })
        }, 300);
    };

    return (
        <>
            <TaskForm
                isOpen={isOpen}
                onSave={onSave}
                onClose={onClose}
                tasks={tasks}
                task={task}
                setTask={setTask}
                handleSubmit={handleSubmit}
            />

            {/* <div className={`fixed inset-0 z-10 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-500 ${!isOpen && 'opacity-0 pointer-events-none'}`}>
                <div className="bg-white p-8 rounded-md w-96">
                    <h2 className="text-xl font-bold mb-4">{title ? title : 'Add'} Task</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block font-semibold mb-1">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={task.title}
                                onChange={(e) => setTask({ ...task, title: e.target.value })}
                                className="form_input"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block font-semibold mb-1">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={task.description}
                                onChange={(e) => setTask({ ...task, description: e.target.value })}
                                rows="4"
                                className="form_textarea resize-none"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Save</button>
                            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                        </div>
                    </form>
                </div >
            </div > */}
        </>
    );
};

export default TaskModal;
