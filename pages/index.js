import Image from "next/image";
import { Inter } from "next/font/google";
import CourseItem from "@/components/module/CourseItem/CourseItem";
import Modal from "@/components/module/Modal/Modal";
import { useEffect, useState } from "react";
import NewCourse from "@/components/module/CourseItem/NewCourse";
import { useCourse } from "@/context/CourseProvider";
import connectToDB from "@/utils/connectToDB";
import axios from "axios";
import courseModel from "@/Models/courses"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { courses, setCourses, getAllCourse, showModal, setShowModal } = useCourse();
  console.log("currentCourses :", courses)
  return (
    <>
      <div className="max-w-[70%] mt-16 mr-8 ">
        <div className="flex max-full items-center justify-between ">
          <span className="font-bold">دوره ها</span>
          <button className="bg-green-500 text-white  p-2 rounded-md shadow-lg shadow-green-800 " onClick={() => setShowModal(true)} >اضافه کردن دوره جدید</button>
          {showModal &&
            <Modal onClose={() => setShowModal(false)}>
              <NewCourse />
            </Modal>
          }
        </div>
        <div className="mt-8">
          {
            courses?.map((course) => <CourseItem {...course} />)
          }

        </div>

      </div>


    </>
  );
}

// export async function getServerSideProps() {
//   let courses = [];
//   try {
//     const { isConnected, message } = await connectToDB();
//     if (isConnected) {
//       const statusGet = await courseModel.find();
//       if (statusGet) {
//         courses = statusGet;
//       } else {
//         return {
//           status: 401,
//           message: "Error when fetch datda"
//         }
//       }
//     }
//   } catch (error) {
//     return {
//       status: 401,
//       message: "Error when fetch datda"
//     }
//   }
//   return {
//     props: {
//       coursesSSR: JSON.parse(JSON.stringify(courses))
//     }
//   }
// }


