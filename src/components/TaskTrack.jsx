import { FiPlus } from "react-icons/fi";
import Task from "./Task";

const TaskTrack = ({ state, tasks }) => {
    return (
        <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-blue-100 p-5 rounded-md mb-3">
                <div className="flex justify-center items-center gap-2 sm:gap-5">
                    <button className="border-2 border-slate-500 rounded-xl h-10 w-10  grid place-content-center hover:text-white transition-all">
                        <p className="font-bold text-gray-600">5</p>
                    </button>
                    <button className="border-2 border-slate-500 rounded-xl h-10 w-10 grid place-content-center hover:text-white transition-all">
                        <p className="font-bold text-gray-600">5</p>
                    </button>
                    <button className="border-2 border-slate-500 rounded-xl h-10 w-10 grid place-content-center hover:text-white transition-all">
                        <p className="font-bold text-gray-600">5</p>
                    </button>
                </div>
                <button className="btn flex justify-center items-center gap-2 max-w-28"> <FiPlus className="w-5 h-5" /> Add Task</button>
            </div>
            <div className="space-y-3">
                {/* Tasks here*/}
                <Task />
            </div>
        </div>
    );
};

export default TaskTrack;