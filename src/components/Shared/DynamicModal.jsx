import { useEffect, useRef } from "react";
import { MdCancel } from "react-icons/md";

const DynamicModal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className={`fixed inset-0 z-10 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-500 ${!isOpen && 'opacity-0 pointer-events-none'}`} onClick={handleClickOutside}>
            <div ref={modalRef} className="bg-white p-8 rounded-md w-96 relative">
                {children}
                <span onClick={onClose} className=" absolute top-1 right-1 cursor-pointer"><MdCancel className="text-red-500 w-6 h-6" /></span>
            </div >
        </div >
    )
}

export default DynamicModal