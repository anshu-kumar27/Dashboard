
import SummaryCard from '../../components/SummaryCard'
import {
    Gauge,
    CircleDollarSign,
    Wallet,
} from "lucide-react";
import { useHospitalContext } from '../../context/HospitalContext';

function AllCards() {
    const { data } = useHospitalContext();
    return (
        <div className="flex-col flex-wrap gap-6 flex
            md:justify-start
            md:items-start
                justify-center
                items-center">
            <SummaryCard
                title="Total Limit"
                value={`₹${data?.total_limit_allocated ?? 0}`}
                icon={Gauge}
                iconColor="text-indigo-600"
            />

            <SummaryCard
                title="Amount Used"
                value={`₹${data?.current_limit_utilised ?? 0}`}
                icon={CircleDollarSign}
                iconColor="text-red-500"
            />

            <SummaryCard
                title="Amount Available"
                value={`₹${data?.current_unutilised_funds ?? 0}`}
                icon={Wallet}
                iconColor="text-green-600"
            />
        </div>

    )
}

export default AllCards