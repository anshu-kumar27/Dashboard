import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  CreditCard,
  LifeBuoy,
  Settings,
  FileText,
  Hospital,
  Menu,
  X,
} from "lucide-react";

export interface SidebarItem {
  label: string;
  icon: any;
  path: string;
}

export const sidebarItems: SidebarItem[] = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Payments", icon: CreditCard, path: "/payments" },
  { label: "Support", icon: LifeBuoy, path: "/support" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Transactions", icon: FileText, path: "/transactions" },
];

const SideBar: React.FC = () => {
    
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  

  const renderSidebar = (extraClasses = "") => (
    <div
      className={`flex flex-col bg-white p-6 space-y-1 border-r border-base-300 h-full md:w-52 lg:w-64 ${extraClasses}`}
    >
      <div className="flex justify-center gap-2 mb-auto flex-col items-center">
        <div className="p-2 bg-green-300 rounded-full">
          <Hospital className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          General Hospital
        </h1>
      </div>

      <div className="flex flex-col gap-1 mt-auto">
        {sidebarItems.map(({ label, icon: Icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <div
              key={label}
              onClick={() => {
                navigate(path);
                setMobileOpen(false);
              }}
              className={`group relative flex items-center gap-3 px-4 py-3 rounded-md font-medium text-base select-none cursor-pointer transition-all duration-200 overflow-hidden ${
                isActive
                  ? "bg-green-600 text-green-50 shadow font-semibold"
                  : "text-green-800 hover:bg-green-200 hover:text-green-900"
              }`}
            >
              <span
                className={`absolute left-0 h-full w-1 rounded-r-lg transition-all duration-200 ${
                  isActive ? "bg-green-700" : "group-hover:bg-green-400"
                }`}
              />
              <Icon size={20} className="z-10" />
              <span className="z-10">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden md:flex fixed h-screen flex-col flex-1 md:w-52 lg:w-64">
        {renderSidebar()}
      </aside>

      <div className={`md:hidden fixed top-0 left-0 z-50 w-full ${mobileOpen ? '' : 'bg-base-200'}  p-4`}>
        <button onClick={handleToggle} className="bg-green-600 p-2 rounded-md text-white">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="fixed left-0 top-0 h-full w-full z-50 bg-white shadow-lg">
            {renderSidebar('w-[100%] flex-1')}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
