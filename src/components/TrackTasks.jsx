import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Task from "./Task";
import TaskModal from "./TaskModal";
import { filterByStatus } from "../lib/filterByStatus";
import FilterByPriority from "./FilterByPriority";

const TrackTasks = () => {
    const [task, setTask] = useState({
        id: Date.now().toString().substring(0, 10) + Math.random().toString(36).substring(2, 7),
        status: 'Pending',
        title: '',
        description: '',
        date: new Date().toLocaleDateString(),
        priority: '',
    });
    const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(allTasks);
    const [showModal, setShowModal] = useState(false);

    const completed = allTasks?.filter(task => task.status === 'Completed')?.length
    const pending = allTasks?.filter(task => task.status === 'Pending')?.length

    return (
        <div className="relative pb-10">
            <div className="flex justify-between  bg-blue-100 p-5 rounded-md mb-3">
                <div className="flex justify-center items-center gap-2 sm:gap-5">
                    <button onClick={() => filterByStatus('Pending', setTasks, 'status')} title="Pending Tasks" className="border-2 border-amber-500 rounded-xl h-10 w-10  grid place-content-center hover:text-white transition-all">
                        <p className="font-bold text-gray-600">{pending}</p>
                    </button>
                    <button onClick={() => filterByStatus('Completed', setTasks, 'status')} title="Completed Tasks" className="border-2 border-green-500 rounded-xl h-10 w-10 grid place-content-center hover:text-white transition-all">
                        <p className="font-bold text-gray-600">{completed}</p>
                    </button>
                    <button onClick={() => filterByStatus('', setTasks, 'status')} title="All Tasks" className="border-2 border-b-amber-500 border-l-amber-500 border-t-green-500 border-r-green-500 rounded-xl h-10 w-10 grid place-content-center hover:text-white transition-all">
                        <p className="font-bold text-gray-600">{allTasks?.length}</p>
                    </button>
                </div>

                <div className="absolute sm:static bottom-[101%] right-0">
                    <FilterByPriority setTasks={setTasks} />
                </div>

                <button onClick={() => setShowModal((prev) => !prev)} className="btn flex justify-center items-center gap-2 max-w-28"> <FiPlus className="w-5 h-5" /> Add Task</button>
            </div>
            <TaskModal
                isOpen={showModal}
                onSave={setTasks}
                onClose={() => setShowModal((prev) => !prev)}
                tasks={tasks}
                task={task}
                setTask={setTask}
                setTasks={setTasks}
            />
            <div className="space-y-3">
                {/* Tasks here*/}
                {tasks?.map((t, i) => (
                    <Task key={i} task={t} tasks={tasks} setTasks={setTasks} />
                ))}
            </div>
        </div>
    );
};

export default TrackTasks;