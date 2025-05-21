import React from "react";
import { useHospitalContext } from "../context/HospitalContext";
import {  LayoutDashboard } from "lucide-react";
import AllCards from "./Dashboard/AllCards";
import Claims from "./Dashboard/Claims";
import { FundUtilizationChart } from "../components/graphs/FundUtilizationChart";

const Dashboard: React.FC = () => {
    const { data } = useHospitalContext();

    return (
        <>

            <div className="p-6 space-y-2">
                {/* Header Row */}
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <LayoutDashboard className="text-green-600 w-6 h-6" />
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                </div>

                {/* Subtext */}
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
                    {/* charts */}
                    <div className="md:w-3/4 w-full flex  justify-center py-4">
                        <FundUtilizationChart utilized={600000} unutilized={400000} />

                        {/* <Claims claims_data={data?.claims_data ?? {}}/> */}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Dashboard;
