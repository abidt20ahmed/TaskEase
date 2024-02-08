import TaskForm from "./TaskForm";

const TaskModal = ({ isOpen, task, tasks, setTask, onSave, onClose }) => {

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
                priority: 'Low',
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
                onInputChange={(e) => setTask({ ...task, title: e.target.value })}
            />
        </>
    );
};

export default TaskModal;
