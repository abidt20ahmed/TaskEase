import TaskForm from './TaskForm'

const EditTaskModal = ({ isOpen, task, tasks, setTask, onSave, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave((prev) => [task, ...prev.filter(t => t.id !== task.id)]);
        const jsonData = JSON.stringify([task, ...tasks.filter(t => t.id !== task.id)]);
        localStorage.setItem('tasks', jsonData);
        onClose()
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

export default EditTaskModal