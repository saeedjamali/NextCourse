import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function Navbar() {
    return (
        <div className='w-fulll h-16 flex items-center justify-between '>
            <div className='w-1/3 h-8 bg-purple-300 mr-8 rounded-lg relative flex items-center justify-between'>
                <input type='text' placeholder='جستجو کنید ...' className='input bg-gray-100'></input>
                <span className='mx-2' ><IoMdSearch /></span>
            </div>
            <div className='ml-16'>
                <span className='profile w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center'>
                    <CgProfile />
                </span>
            </div>
        </div>
    )
}

export default Navbar