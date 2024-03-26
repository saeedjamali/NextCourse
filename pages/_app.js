import Navbar from "@/components/module/Navbar/Navbar";
import Sidebar from "@/components/module/Sidebar/Sidebar";
import CourseProvider from "@/context/CourseProvider";
import "@/styles/globals.css";




export default function App({ Component, pageProps }) {


  return (
    <CourseProvider>
      <div className="font-yekan font-medium text-[0.8rem] w-full h-screen flex">
        <div className="w-[15%] h-screen bg-gray-100   ">
          <Sidebar />
        </div>
        <div className="w-full border-r-2 border-gray-200">
          <Navbar />
          <Component {...pageProps} />
          <div id="modal-root"></div>
        </div>
      </div >
    </CourseProvider>
  )
}
