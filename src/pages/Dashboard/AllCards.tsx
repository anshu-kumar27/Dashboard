
import SummaryCard from '../../components/SummaryCard'
import { Timer } from 'lucide-react'
import { useHospitalContext } from '../../context/HospitalContext';

function AllCards() {
    const { data } = useHospitalContext();
    return (
        <div className="flex-col flex-wrap gap-6 flex
           md:justify-start
           md:items-start
                justify-center
                items-center">
            <SummaryCard title="Total Limit" value={`₹${data?.total_limit_allocated ?? 0}`} icon={Timer} />
            <SummaryCard title="Amount Used" value={`₹${data?.current_limit_utilised ?? 0}`} icon={Timer} />
            <SummaryCard title="Amount Available" value={`₹${data?.current_unutilised_funds ?? 0}`} icon={Timer} />
        </div>

    )
}

export default AllCards