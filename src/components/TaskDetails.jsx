const TaskDetails = ({ task }) => {
    return (
        <div className="">
            <h2 className="text-xl font-bold mb-4">Task Details</h2>
            <p><strong>ID:</strong> {task.id}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Date:</strong> {task.date}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
        </div>
    )
}

export default TaskDetails