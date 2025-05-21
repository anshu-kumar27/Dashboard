// components/Charts/BarChartComponent.tsx
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

interface BarChartComponentProps {
    title: string;
    data: { name: string; value: number }[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ title, data }) => {
    return (
        <div className="w-full md:w-[60%] p-4 shadow-lg rounded-lg bg-white">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
