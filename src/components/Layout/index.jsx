import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import SideBar from "../../SideBar"
import CustomModal from "../CustomModal"
import { useState } from "react";

const Layout = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <CustomModal />
            <SideBar isOpen={sideBarOpen} handleSidebar={setSideBarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="h-15 shrink-0 shadow">
                    <NavBar openSidebar={sideBarOpen} />
                </div>
                <div className="overflow-y-auto mt-5 ml-3 content-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Layout