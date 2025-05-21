import React from "react";
import type { SingleClaim } from "../pages/Dashboard/Claims";

interface ClaimCardProps {
    claim: SingleClaim;
}

const statusClassMap = {
    Paid: {
        dot: "bg-green-500",
        amount: "text-black",
        status: "text-green-500",
    },
    Pending: {
        dot: "bg-yellow-500",
        amount: "text-black",
        status: "text-yellow-500",
    },
    Failed: {
        dot: "bg-red-500",
        amount: "text-black",
        status: "text-red-500",
    },
    neutral: {
        dot: "bg-gray-500",
        amount: "text-black",
        status: "text-gray-500",
    },
};

const ClaimDetailsComponent: React.FC<ClaimCardProps> = ({ claim }) => {
    const status = claim?.claim_status ?? "neutral";
    const classes = statusClassMap[status];

    return (
        <div
            className="w-full max-w-md p-4 rounded-lg shadow-sm bg-white flex flex-col gap-2 md:mb-4"
        >
            <div className="flex md:justify-between md:items-center md:flex-row flex-col">
                <div className="flex items-center gap-2">
                    
                    <p className="font-bold text-gray-800 text-sm md:text-base">
                        ID: {claim?.claim_id ?? "UK000"}
                    </p>
                    <span className={`w-2 h-2 rounded-full ${classes.dot}`} />
                </div>
                <div>
                <p className="text-xs md:text-sm text-gray-500">
                    {claim?.claim_date ?? "00-00-0000"}
                </p>
                </div>
            </div>

            <p className={`${classes.amount} font-semibold text-sm md:text-base`}>
                Amount: ₹{claim?.claim_amount ?? "0000"}
            </p>

            <p className={`${classes.status} font-medium text-sm md:text-base`}>
                Status: {claim?.claim_status ?? "Neutral"}
            </p>
        </div>
    );
};



export default ClaimDetailsComponent;
