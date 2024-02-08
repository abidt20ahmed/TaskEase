import TaskForm from './TaskForm'

const EditTaskModal = ({ isOpen, task, tasks, setTask, onSave, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // onSave((prev) => [task, ...prev.filter(t => t.id !== task.id)]); // TO update and set it to the first place
        onSave((prev) => { //to keep the previous order
            const updatedTasks = [...prev];
            const index = updatedTasks.findIndex(t => t.id === task.id);
            if (index !== -1) {
                updatedTasks[index] = task; // Updating the task keeping the previous order
            }
            return updatedTasks;
        });

        const jsonData = JSON.stringify([task, ...tasks.filter(t => t.id !== task.id)]);
        localStorage.setItem('tasks', jsonData); // Setting the updated data in order to persistance
        onClose() // To close the modal...........
    };
    return (
        <div>
            <TaskForm
                isOpen={isOpen}
                onSave={onSave}
                onClose={onClose}
                tasks={tasks}
                task={task}
                setTask={setTask}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default EditTaskModal;