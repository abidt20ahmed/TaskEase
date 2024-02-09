const Confirm = ({ isOpen, message, onConfirm, onCancel }) => {
    return (
        <div className={`fixed inset-0 z-10 flex justify-center items-center bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-8 rounded-md">
                <p className="text-lg font-semibold mb-4">{message}</p>
                <div className="flex justify-end">
                    <button onClick={onCancel} className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-md mr-2">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 hover:bg-red-600 hover:drop-shadow text-white rounded-md">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;