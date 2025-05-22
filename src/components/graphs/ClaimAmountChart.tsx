import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

type ClaimDataPoint = {
    date: string;
    amount: number;
};

interface Props {
    data: ClaimDataPoint[];
}

export const ClaimAmountChart: React.FC<Props> = ({ data }) => {
    return (
        <div className="w-[97%] md:h-[420px] h-[300px] bg-white py-4 rounded shadow-md mt-4 px-4">
            <h3 className="text-center text-sm md:text-lg font-semibold mb-2">
                Claim Amounts Over Time
            </h3>

            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `₹${value / 1000}k`} />
                    <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
