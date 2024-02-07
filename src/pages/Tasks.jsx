import { FiPlus } from "react-icons/fi";
import TaskTrack from "../components/TaskTrack";

const Tasks = () => {
    return (
        <div className="h-screen px-3 md:px-0 container mx-auto mt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
                <div>
                    <h1 className="font-bold text-3xl text-blue-500">TaskEase</h1>
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-5">
                    <div className="flex justify-center items-center gap-2 sm:gap-5">
                        <button className="border-2 rounded-xl h-10 w-10  grid place-content-center hover:text-white transition-all">
                            <p className="font-bold text-gray-600">5</p>
                        </button>
                        <button className="border-2 rounded-xl h-10 w-10 grid place-content-center hover:text-white transition-all">
                            <p className="font-bold text-gray-600">5</p>
                        </button>
                        <button className="border-2 rounded-xl h-10 w-10 grid place-content-center hover:text-white transition-all">
                            <p className="font-bold text-gray-600">5</p>
                        </button>
                    </div>
                    <button className="btn flex justify-center items-center gap-2 max-w-28"> <FiPlus className="w-5 h-5" /> Add Task</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                <TaskTrack state={'Pending'} tasks={5} />
                <TaskTrack state={'In Progress'} tasks={3} />
                <TaskTrack state={'Completed'} tasks={2} />
            </div>
        </div>
    );
};

export default Tasks;