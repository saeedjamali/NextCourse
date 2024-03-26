import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { MdOutlineRoundaboutLeft } from "react-icons/md";

function Sidebar() {
    return (
        <div className='flex flex-col items-center justify-start '>
            <div className='flex items-center justify-center gap-x-4 my-12 h-10'>
                <span className='logo'><img src='./image/logo.png' className='h-8' /></span>
                <span className='font-extrabold text-xl'>ایران من</span>
            </div>
            <div className='w-full mr-8'>
                <ul className='space-y-4'>
                    <li className='menu-li'>
                        <span><IoHomeSharp /></span>
                        <span>صفحه اصلی</span>
                    </li>
                    <li className='menu-li'>
                        <span><IoIosContact /></span>
                        <span>تماس با ما</span>
                    </li>
                    <li className='menu-li'>
                        <span><MdOutlineRoundaboutLeft /></span>
                        <span>درباره ما</span>
                    </li>
                </ul>
            </div>
            <div className='mt-16 border-t-2 border-gray-200 w-full px-8 py-4'>
                خروج
            </div>
        </div>
    )
}

export default Sidebar