import TaskTrack from "../components/TrackTasks";

const Tasks = () => {
    return (
        <div className="px-3 lg:px-0 container mx-auto mt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
                <div>
                    <h1 className="font-bold text-3xl text-blue-500">TaskEase</h1>
                </div>
                <ul className="flex gap-10">
                    <li className="font-semibold list-disc text-amber-500" title="Color Indicator">Pending </li>
                    <li className="font-semibold list-disc text-green-500" title="Color Indicator">Completed</li>
                </ul>
            </div>
            <div className="lg:w-2/5 mx-auto mt-10">
                <TaskTrack state={'Pending'} tasks={5} />
            </div>
        </div>
    );
};

export default Tasks;