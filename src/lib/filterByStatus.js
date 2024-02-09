export const filterByStatus = (query, setTasks, filterBy) => {
    console.log(query, filterBy);
    const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (query) {
        const filtered = allTasks?.filter(task => task[filterBy] === query)
        setTasks(filtered)
    } else {
        setTasks(allTasks)
    }

}