import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CourseContext = createContext();
function CourseProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState(0);
    const [teacher, setTeacher] = useState("");
    const [img, setImg] = useState("./image/1.jpg");
    const [courses, setCourses] = useState([]);




    const getAllCourse = async () => {
        try {
            const { data, status } = await axios.get("/api");
            console.log("Data:", data);
            if (status == 200) {
                toast.success(data.message);
                setCourses(data.data);
                courses.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
                console.log("Courses : ", courses)
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("خطای ناشناخته در بروزرسانی لیست")
        }
    }

    useEffect(() => {
        getAllCourse();
    }, []);
    const addNewCourse = async (e) => {
        e.preventDefault();
        if (!title || cost == 0 || !teacher) {
            toast.error("تكميل تمام مقادير بجز تصوير ،‌ضروري مي باشد.");
            return;
        }
        const newCourse = {
            title,
            cost,
            teacher,
            createdAt: new Date().toLocaleString('fa'),
            updatedAt: new Date().toLocaleString('fa')
        }

        const { data, status } = await axios.post("/api", newCourse);
        if (status == 200) {
            setTitle("");
            setCost(0);
            setTeacher("");
            getAllCourse();
            toast.success(data.message);

        }
        else { toast.error(data.message); }
        setShowModal(false);
    }

    return (
        <CourseContext.Provider value={{ title, cost, img, setTitle, setCost, addNewCourse, setImg, teacher, setTeacher, showModal, setShowModal, setCourses, getAllCourse, courses }}>{children}</CourseContext.Provider>
    )
}

export default CourseProvider;

export function useCourse() {
    return useContext(CourseContext)
}

