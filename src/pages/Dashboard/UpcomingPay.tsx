import React from "react";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

interface UpcomingRepaymentProps {
    upcomingDate: string;
    amountDue: number;
}

const UpcomingRepayment: React.FC<UpcomingRepaymentProps> = ({ upcomingDate, amountDue }) => {
    return (
        <div className="w-[97%] bg-yellow-100 rounded-lg p-4 flex items-center gap-4 shadow-sm">
            <div className="p-2 bg-yellow-300 rounded-full">
                <CalendarDays className="h-6 w-6 text-yellow-800" />
            </div>
            <div className="flex flex-col">
                <p className="md:text-sm text-xs text-yellow-900 font-semibold">Repayment Date</p>
                <p className="md:text-md text-xs font-bold text-gray-800">
                    {format(new Date(upcomingDate), "MMM dd, yyyy")}
                </p>
                <p className="md:text-lg text-md font-bold text-green-700">₹{amountDue.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default UpcomingRepayment;
