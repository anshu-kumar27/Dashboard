import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";

interface PieChartProps {
  utilised: number;
  unutilised: number;
}

const COLORS = ["#EF4444", "#22C55E"]; // Red for used, Green for available

const PieChartWithCustomizedLabel: React.FC<PieChartProps> = ({
  utilised,
  unutilised,
}) => {
  const data = [
    { name: "Used", value: utilised },
    { name: "Available", value: unutilised },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label
              value="Fund Usage"
              position="center"
              fill="#374151"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartWithCustomizedLabel;
