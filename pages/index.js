import Image from "next/image";
import { Inter } from "next/font/google";
import CourseItem from "@/components/module/CourseItem/CourseItem";
import Modal from "@/components/module/Modal/Modal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-[70%] mt-16 mr-8">
        <div className="flex max-full items-center justify-between ">
          <span className="font-bold">دوره ها</span>
          <button className="bg-green-500 text-white  p-2 rounded-md shadow-lg shadow-green-800 " onClick={() => setShowModal(true)} >اضافه کردن دوره جدید</button>
          {showModal &&
            <Modal onClose={() => setShowModal(false)}>
              Hello from the modal!
            </Modal>
          }
        </div>
        <div className="mt-8">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>


    </>
  );
}
