import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

type FundUtilizationChartProps = {
    utilized: number;
    unutilized: number;
};

const COLORS = ['#FF9999', '#66B3FF'];
const LEGEND_LABELS = ['Utilized', 'Unutilized'];

export const FundUtilizationChart: React.FC<FundUtilizationChartProps> = ({ utilized, unutilized }) => {
    const data = [
        { name: 'Utilized', value: utilized },
        { name: 'Unutilized', value: unutilized },
    ];

    return (
        <div className="md:w-[80%] w-[95%] h-[450px] bg-white shadow-md rounded-md">
            <h3 className="text-center text-lg font-semibold p-4">Fund Utilization Overview</h3>

             {/* Custom legend top-right */}
            <div className="absolute bg-white rounded shadow px-3 py-2 text-sm" style={{ transform: "translate(20px, 22em)" }}> 
                {data.map((entry, index) => (
                    <div key={entry.name} className="flex items-center gap-2 mb-1 last:mb-0">
                        <div
                            className="w-3 h-3 rounded-sm"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span>{entry.name}</span>
                    </div>
                ))}
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="40%"
                        outerRadius={125}
                        innerRadius={0}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                        label
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                    {/* <Legend /> */}
                </PieChart>
                
            </ResponsiveContainer>
        </div>
    );
};
