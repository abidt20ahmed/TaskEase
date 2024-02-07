
const TaskTrack = ({ state, tasks }) => {
    return (
        <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-blue-100 p-5 rounded-md mb-3">
                <h1 className="font-bold">{state}</h1>
                <p className="bg-blue-500 text-white w-6 h-6 grid place-content-center rounded-md">
                    {tasks}
                </p>
            </div>
            <div className="space-y-3">
                {/* Tasks here*/}
            </div>
        </div>
    );
};

export default TaskTrack;