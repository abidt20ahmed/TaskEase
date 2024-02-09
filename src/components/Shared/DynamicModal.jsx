const DynamicModal = ({ isOpen, children }) => {
    return (
        <div className={`fixed inset-0 z-10 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-500 ${!isOpen && 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white p-8 rounded-md w-96">
                {children}
            </div >
        </div >
    )
}

export default DynamicModal