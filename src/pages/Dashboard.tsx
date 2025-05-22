import React from "react";
import { useHospitalContext } from "../context/HospitalContext";
import { LayoutDashboard } from "lucide-react";
import AllCards from "./Dashboard/AllCards";
import { FundUtilizationChart } from "../components/graphs/FundUtilizationChart";
import ClaimCardView from "./Dashboard/ClaimCardView";
import Claims from "./Dashboard/Claims";
import UpcomingRepayment from "./Dashboard/UpcomingPay";
import AdditionalDetails from "./Dashboard/AdditionalDetails";
import HospitalCard from "./Dashboard/HospitalCard";

const Dashboard: React.FC = () => {
    const { data } = useHospitalContext();

    return (
        <>

            <div className="p-6 space-y-2">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <LayoutDashboard className="text-green-600 w-6 h-6" />
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                </div>
                <div className="flex justify-center md:justify-start md:mb-6 mb-8">
                    <p className="text-sm text-gray-600">
                        Welcome to the dashboard of{" "}
                        <span className="font-medium text-gray-800">
                            {data?.hospital_name || "Hospital"}
                        </span>
                    </p>
                </div>
                <div className="md:flex-row flex flex-col">
                    <div className="md:w-1/4 w-full md:mb-0 mb-4">
                        <AllCards />
                    </div>

                    <div className="md:w-3/4 w-full flex  justify-center py-4">
                        <FundUtilizationChart utilized={data?.current_limit_utilised ?? 0} unutilized={data?.current_unutilised_funds ?? 0
                        } />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row flex-1 md:px-1 pl-2">
                    <div className="md:w-1/2 w-full">
                        <ClaimCardView />
                    </div>
                    <div className="md:w-1/2">
                        <Claims claims_data={data?.claims_data ?? {}}/>
                    </div>

                </div>
                

                <div className="flex flex-col md:flex-row flex-1 md:px-1 pl-2 mt-10">
                    <div className="md:w-1/2 w-full">
                        <UpcomingRepayment upcomingDate="2024-08-01" amountDue={30000} />
                        <div className="md:mb-4 md:flex hidden"></div>
                        <div className="md:block hidden"><HospitalCard/></div> 
                    </div>
                    <div className="md:w-1/2">
                        <AdditionalDetails/>
                    </div>

                </div>
                <div className="md:hidden flex ml-2 mt-8"><HospitalCard/></div> 
            </div>


        </>
    );
};

export default Dashboard;
