import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sidebarItems } from "./SideBar"; // assuming you extract sidebarItems to a shared file or export it

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  setActiveItem: (label: string) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  activeItem,
  setActiveItem,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 h-[100dvh] w-[100%]">
      <aside className="fixed top-0 left-0 h-full w-64 bg-base-200 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose}>
            <X className="text-gray-600 hover:text-red-500" />
          </button>
        </div>

        <div className="flex flex-col gap-1 h-[100dvh] w-[100%]">
          {sidebarItems.map(({ label, icon: Icon, path }) => {
            const isActive = label === activeItem;

            return (
              <div
                key={label}
                onClick={() => {
                  setActiveItem(label);
                  navigate(path);
                  onClose(); // close on selection
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
    </div>
  );
};

export default MobileSidebar;
