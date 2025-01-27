import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52">
            <Navbar/>
            <Outlet/>   
            {/* jadi outlet ini akan merender element anak dari route yang sedang aktif children:[]*/}
        </div>
    )
}

export default MainLayout;