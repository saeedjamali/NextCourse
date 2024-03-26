import React from 'react'

function CourseItem({ title, teacher }) {
    return (
        <>
            <div className='w-full h-16 shadow-lg shadow-gray-400 flex items-center justify-between rounded-md mt-4'>
                <div className='h-full rounded-md'>
                    <img src="./image/1.jpg" alt="" className='h-full w-32 rounded-r-md' />
                </div>
                <div className='flex-1 pr-4'>{title}  - مدرس دوره : {teacher} </div>
                <div className='pl-4 space-x-4'>
                    <button className='bg-green-400 mx-2 p-2 rounded-md'>ویرایش</button>
                    <button className='bg-red-400 mx-2 p-2 rounded-md'>حذف</button>
                </div>
            </div>

        </>
    )
}

export default CourseItem