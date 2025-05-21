import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface RadarChartProps {
  totalLimit: number;
  utilised: number;
  unutilised: number;
}

const RadarChartComponent: React.FC<RadarChartProps> = ({ totalLimit, utilised, unutilised }) => {
  const radarData = [
    { subject: "Total Limit", value: totalLimit },
    { subject: "Used", value: utilised },
    { subject: "Available", value: unutilised },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Limits" dataKey="value" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
