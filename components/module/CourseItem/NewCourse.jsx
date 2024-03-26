import { useCourse } from '@/context/CourseProvider';
import React from 'react'

function NewCourse() {
    const { title, cost, img, setTitle, setCost, setImg, setTeacher, teacher } = useCourse();
    return (
        <div className='w-full flex flex-col space-y-4'>
            <input type="text" className='input w-full h-12 mt-4 bg-slate-200 flex-1' placeholder='عنوان دوره' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" className='input w-full h-12 mt-4 bg-slate-200 flex-1' placeholder='هزينه دوره' value={cost} onChange={(e) => setCost(e.target.value)} />
            <input type="text" className='input w-full h-12 mt-4 bg-slate-200 flex-1' placeholder='مدرس دوره' value={teacher} onChange={(e) => setTeacher(e.target.value)} />
            <div className='flex justify-between w-full  bg-slate-200 flex-1 px-4 py-2 rounded-lg'>
                <label htmlFor="file" className='ml-8'>تصوير دوره </label>
                <input type='file' name='file' accept="image/png, image/jpeg" placeholder='تصوير دوره' onChange={() => setImg("")} />
            </div>
        </div>
    )
}

export default NewCourse