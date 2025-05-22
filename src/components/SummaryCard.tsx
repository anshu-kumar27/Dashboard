import React from "react";
import { type LucideIcon } from "lucide-react";

interface SummaryCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon: Icon }) => {
    return (
        <div
            className="
                rounded-lg shadow-md p-5 flex flex-col md:my-4 my-0 bg-white
                hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer
                w-[95%] h-28
                md:h-28
            "
        >
            <div className="flex items-center space-x-3 mb-3">
                <h3 className="text-gray-700 font-semibold text-base md:text-base">
                    {title}
                </h3>
                <Icon className="text-indigo-500 w-6 h-6" />
            </div>
            <p className="text-xl font-bold md:text-xl text-gray-900">
                {value}
            </p>
        </div>
    );
};

export default SummaryCard;
