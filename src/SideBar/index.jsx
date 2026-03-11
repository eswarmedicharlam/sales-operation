import { useState } from "react";
import { useNavigate } from "react-router-dom";
import saleLogo from "../assets/images/salesoperation-logo.png";
import dashboardIcon from "../assets/images/sidebar-icons/dashboard-icon.png";
import empManageIcon from "../assets/images/sidebar-icons/emp-manage-icon.png";
import activityPlottingIcon from "../assets/images/sidebar-icons/activity-plotting.png";
import logoutIcon from "../assets/images/logout-icon.png";
import { useModal } from "../hooks/useModal";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/UserDataSlice";


const menuItems = [
  { id: 1, label: "Dashboard", path: "/dashboard", icon: dashboardIcon },
  { id: 2, label: "Employee Management", path: "/employee-management", icon: empManageIcon },
  { id: 3, label: "Activity Plotting", path: "/activity-ploting", icon: activityPlottingIcon },
//   { id: 3, label: "Logout", path: null, isLogout: true }
];

const SideBar = ({ isOpen, handleSidebar }) => {
  const navigate = useNavigate();
  const [selectedMenuId, setSelectedMenuId] = useState(1);
  const { showModal } = useModal();
  const dispatch = useDispatch();



  const handleNavigate = (path, itemId) => {
    if (isOpen) handleSidebar(false);
    setSelectedMenuId(itemId);
    navigate(path);
  };

  const handleLogout = () => {
    showModal({
      title: "Confirm Logout",
      children: <p>Are you sure you want to logout?</p>,
      successBtnText: "Logout",
      cancelBtnText: "Cancel",
      width: "w-[400px]",  
      onConfirm: () => confirmLogout(),
    });
  };

  const confirmLogout = () => {
    dispatch(logoutUser())
    navigate("/");
  };


  return (
    <div className="flex relative">
      <div
        className={`${isOpen ? "w-64 shadow-2xl" : "w-0"} md:w-58 bg-[#005B30] transition-all duration-300 min-h-screen overflow-hidden flex flex-col gap-1.25 absolute md:static z-20`}
      >
         <div className="flex justify-center md:justify-between items-center p-2 cursor-pointer bg-white m-2 rounded-[10px]">
          <img
            src={saleLogo}
            alt="corteva-logo"
            className={`md:block ${isOpen ? "block" : "hidden"}`}
          />
        </div>
        <nav className="grow overflow-y-auto">
          <ul className="space-y-2 p-4">
            {menuItems.map((item) => (
              !item.isLogout && (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.path, item.id)}
                    className={`w-full flex items-center gap-3 px-1 py-2 rounded-lg transition ${
                      selectedMenuId === item.id
                        ? "bg-white text-[#005B30]"
                        : "text-white"
                    }`}
                  >
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      className={`w-5 h-5 transition-all ${
                        selectedMenuId === item.id
                          ? "brightness-0 saturate-100 invert-[0.3] sepia-[0.3]"
                          : ""
                      }`}
                    />
                    <span className="text-[13.5px] font-medium">{item.label}</span>
                  </button>
                </li>
              )
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#FFFFFF33]">
          <button
            onClick={handleLogout}
            className="w-full text-[#FFFFFF] px-4 py-2 font-medium flex items-center gap-2 cursor-pointer"
          >
            <img src={logoutIcon} alt={"logout-icon"} className="w-5 h-5" />
            Signout
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-40 z-10"
          onClick={() => handleSidebar(false)}
        />
      )}
    </div>
  );
};

export default SideBar;
