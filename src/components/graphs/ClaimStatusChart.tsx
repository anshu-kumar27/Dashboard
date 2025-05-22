import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

type ClaimsStatusChartProps = {
    paid: number;
    pending: number;
};

const COLORS = ['#4CAF50', '#FFC107'];

export const ClaimsStatusChart: React.FC<ClaimsStatusChartProps> = ({ paid, pending }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = [
        { name: 'Paid', value: paid },
        { name: 'Pending', value: pending },
    ];

    return (
        <div className="w-[97%] md:h-[420px] h-[300px] bg-white py-4 rounded shadow-md mt-4">
            <h3 className="text-center text-sm md:text-lg font-semibold mb-2">Claims Status Overview</h3>

            <ResponsiveContainer width="100%" height="80%">
                <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
                    <XAxis dataKey="name" tick={isMobile ? false : undefined} />
                    <YAxis allowDecimals={false} />
                    <Tooltip formatter={(value: number) => `${value} claim${value > 1 ? 's' : ''}`} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            {isMobile && (
                <div className="flex justify-around text-xs mt-0">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-[#4CAF50] rounded-sm"></div>
                        <span>Paid</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-[#FFC107] rounded-sm"></div>
                        <span>Pending</span>
                    </div>
                </div>
            )}
        </div>
    );
};
