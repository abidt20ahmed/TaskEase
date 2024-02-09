import { filterByStatus } from "../lib/filterByStatus";

const FilterByPriority = ({ setTasks }) => {
    return (
        <select
            onChange={(e) => filterByStatus(e.target.value, setTasks, 'priority')}
            id="priority"
            className="bg-blue-50 border border-slate-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block px-2 h-6 sm:h-10"
            value={''}
        >
            <option value="" hidden>Filter by priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    )
}

export default FilterByPriority;