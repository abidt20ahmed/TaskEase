import TaskTrack from "../components/TrackTasks";

const Tasks = () => {
    return (
        <div className="h-screen px-3 md:px-0 container mx-auto mt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
                <div>
                    <h1 className="font-bold text-3xl text-blue-500">TaskEase</h1>
                </div>
                <ul className="flex gap-10">
                    <li className="font-semibold list-disc text-amber-500">Pending </li>
                    <li className="font-semibold list-disc text-green-500">Completed</li>
                </ul>
            </div>
            <div className="w-1/3 mx-auto gap-5 mt-10">
                <TaskTrack state={'Pending'} tasks={5} />
            </div>
        </div>
    );
};

export default Tasks;