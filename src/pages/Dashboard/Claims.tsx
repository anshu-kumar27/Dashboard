import { useState } from "react";
import ClaimDetailsComponent from "../../components/ClaimDetailsComponenet";

export interface SingleClaim {
    claim_id: string;
    claim_amount: number;
    claim_date: string;
    claim_status: "Paid" | "Pending";
}

interface ClaimData {
    claims_data: Record<string, SingleClaim> | {};
}

const statusColorMap = {
    All: "bg-gray-200 text-black", 
    Paid: "bg-green-200 text-black",
    Pending: "bg-yellow-200 text-black",
    Failed: "bg-red-200 text-black",
};

const activeStatusColorMap = {
    All: "bg-[#78BCC4] text-white",
    Paid: "bg-green-600 text-white",
    Pending: "bg-yellow-600 text-white",
    Failed: "bg-red-600 text-white",
};

const Claims: React.FC<ClaimData> = ({ claims_data }) => {
    const [filter, setFilter] = useState<"All" | "Paid" | "Pending" | "Failed">("All");

    const claimArray = Object.values(claims_data);

    const filteredClaims =
        filter === "All"
            ? claimArray
            : claimArray.filter((claim) => claim.claim_status === filter);

    return (
        // w-[97%] md:h-[420px] h-[300px] bg-white py-4 rounded shadow-md mt-4
        <div className=" flex flex-col items-center justify-start w-[97%] md:h-[420px] h-[500px]  bg-white rounded shadow-md md:mt-4 mt-10 overflow-hidden">
            <div className="w-full bg-white p-4">
                    <h3 className="text-center text-sm md:text-lg font-semibold mb-6">Claims History</h3>

                <div className="flex justify-between gap-4 w-full">
                    {["All", "Paid", "Pending"].map((status) => {
                        const isActive = filter === status;
                        const baseColor = isActive
                            ? activeStatusColorMap[status as keyof typeof activeStatusColorMap]
                            : statusColorMap[status as keyof typeof statusColorMap];

                        const ring = isActive ? "ring-2 ring-offset-1 ring-green-500" : "";
                        const fontWeight = isActive ? "font-bold" : "font-semibold";

                        return (
                            <button
                                key={status}
                                onClick={() => setFilter(status as typeof filter)}
                                className={`flex-1 px-4 py-2 rounded-md text-center transition-all duration-200 cursor-pointer ${baseColor} ${fontWeight} ${ring}`}
                            >
                                {status}
                            </button>
                        );
                    })}

                </div>
            </div>

            <div className="flex flex-col w-full gap-3 overflow-y-auto px-6 md:py-2 mb-6 mt-4 py-4 items-center">
                {filteredClaims.map((claim) => (
                    <ClaimDetailsComponent key={claim.claim_id} claim={claim} />
                ))}
            </div>
        </div>
    );

};

export default Claims