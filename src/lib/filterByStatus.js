export const filterByStatus = (status, setTasks) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (status) {
        const filtered = allTasks?.filter(task => task.status === status)
        setTasks(filtered)
    } else {
        setTasks(allTasks)
    }

}