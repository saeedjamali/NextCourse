import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const CourseContext = createContext();
function CourseProvider({ children }) {


    return (
        <CourseContext.Provider value={{  }}>{children}</CourseContext.Provider>
    )
}

export default CourseProvider;

export function useTodo() {
    return useContext(CourseContext)
}