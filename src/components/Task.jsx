import { FiEdit, FiTrash } from "react-icons/fi";
import { MdCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Task = () => {
    const task = {
        id: 1,
        status: 'pending',
        title: 'My Task',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores exercitationem ipsam earum neque, soluta ea hic quam aliquid quo..',
        date: '2024-02-08',
        assignedTo: 'Person',
        priority: 'high',
    };

    return (
        <div className="bg-slate-200 rounded-md p-5">
            <h1
                className={`text-lg font-bold mb-3  ${task.priority === 'high' ? 'text-red-500' : ''
                    } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${task.priority === 'low' ? 'text-green-500' : ''
                    }`}
            >
                {task?.title}
            </h1>
            <p className="mb-3">{task?.description}</p>
            <p className="text-sm">Assigned to - {task?.assignedTo}</p>
            <div className="flex justify-between mt-3">
                <p>{task?.date}</p>
                <div className="flex gap-3">
                    <button
                        title="Complete"
                    >
                        {/* <MdCheckBox className="h-5 w-5 text-green-500" /> */}
                        <MdOutlineCheckBoxOutlineBlank className="h-5 w-5 text-blue-500" />
                    </button>
                    <button
                        title="Edit"
                    >
                        <FiEdit className="h-5 w-5 text-slate-500" />
                    </button>
                    <button title="Delete">
                        <FiTrash className="h-5 w-5 text-red-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task;