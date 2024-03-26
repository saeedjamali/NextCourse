import Navbar from "@/components/module/Navbar/Navbar";
import Sidebar from "@/components/module/Sidebar/Sidebar";
import CourseProvider from "@/context/CourseProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";




export default function App({ Component, pageProps }) {


  return (
    <CourseProvider>
      <Toaster />
      <div className="font-yekan font-medium text-[0.8rem] w-full flex bg-gray-100">
        <div className="w-[15%] h-screen    ">
          <Sidebar />
        </div>
        <div className="w-full border-r-2 border-gray-200 bg-white">
          <Navbar />
          <Component {...pageProps} />
          <div id="modal-root"></div>
        </div>
      </div >
    </CourseProvider>
  )
}
