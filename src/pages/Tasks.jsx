import { FiPlus } from "react-icons/fi";

const Tasks = () => {
    return (
        <div className="h-screen px-3 md:px-0 container mx-auto mt-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-3xl text-blue-500">TaskEase</h1>
                </div>
                <div className="flex gap-5">
                    <button className="border-2 border-secondary/20 rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
                        <p className="font-bold text-gray-600">5</p>
                    </button>
                    <button className="border-2 border-secondary/20 rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
                        <p className="font-bold text-gray-600">5</p>
                    </button>
                    <button className="border-2 border-secondary/20 rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
                        <p className="font-bold text-gray-600">5</p>
                    </button>
                    <button className="btn flex justify-center items-center gap-2"> <FiPlus className="w-5 h-5" /> Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default Tasks;