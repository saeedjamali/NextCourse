import { useCourse } from "@/context/CourseProvider";
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {

    const { addNewCourse, setTitle, setCost, setTeacher } = useCourse();

    const handleCloseClick = (e) => {
        e.preventDefault();
        setTitle("");
        setCost("");
        setTeacher("");
        onClose();
    };

    const handleAddNewCourse = (e) => {
        e.preventDefault();
        console.log("Hi")
    }
    const modalContent = (
        <div className="modal-overlay">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="modal-wrapper ">
                <div className="modal flex flex-col items-start ">
                    <div className="modal-header w-full bg-green-800 rounded-t-lg flex items-start justify-start  ">
                        <span className="text-white w-full px-4 py-2 font-bold text-[1rem]">فرم ثبت دوره جديد</span>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body flex-1 w-full">{children}</div>
                    <div className="modal-footer flex justify-end w-full">
                        <button className="bg-green-500 px-4 py-2 rounded-lg mr-4" onClick={(e) => addNewCourse(e)}>ثبت</button>
                        <button className="bg-red-500 px-4 py-2 rounded-lg mr-4" onClick={(e) => handleCloseClick(e)}>بستن</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal