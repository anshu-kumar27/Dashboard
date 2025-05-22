import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  CreditCard,
  LifeBuoy,
  Settings,
  FileText,
  Hospital,
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
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <aside className="hidden fixed md:flex flex-col h-screen bg-white p-6 space-y-1 border-r border-base-300 flex-1 w-1/6">
        <div className="flex justify-center gap-2 mb-auto flex-col items-center">
          <div className="p-2 bg-green-300 rounded-full"><Hospital className="w-8 h-8"/></div>
          <h1 className="text-2xl font-bold text-gray-800 text-center">General Hospital</h1>
        </div>

        <div className="flex flex-col gap-1 mt-auto">
          {sidebarItems.map(({ label, icon: Icon, path }) => {
            const isActive = location.pathname == path;

            return (
              <div
                key={label}
                onClick={() => {
                  setActiveItem(label);
                  navigate(path);
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
      </aside>

      {/* Mobile top bar */}
      {/* <div className="md:hidden p-4 flex justify-between items-center bg-base-100 shadow" onClick={() => setIsMobileOpen(true)}>
        <h1 className="text-xl font-bold">HealthCred</h1>
        <button >
          <Menu className="text-green-700" />
        </button>
      </div> */}

      {/* Mobile sidebar overlay */}
      {/* <MobileSidebar
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      /> */}
    </>
  );
};

export default SideBar;
