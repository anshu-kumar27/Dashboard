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
        <div className="flex flex-col items-center justify-start w-[95%] md:w-[80%] h-[450px] p-0 gap-0 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full bg-base-200 shadow-md p-4">
                <h1>Claims</h1>
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
                                className={`flex-1 px-4 py-2 rounded-md text-center transition-all duration-200 ${baseColor} ${fontWeight} ${ring}`}
                            >
                                {status}
                            </button>
                        );
                    })}

                </div>
            </div>

            {/* details of claims  */}
            <div className="flex flex-col w-full gap-3 overflow-y-auto px-6 md:py-12 py-6 items-center">
                {filteredClaims.map((claim) => (
                    <ClaimDetailsComponent key={claim.claim_id} claim={claim} />
                ))}
            </div>
        </div>
    );

};

export default Claims