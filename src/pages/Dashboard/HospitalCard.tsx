import { useHospitalContext } from "../../context/HospitalContext"
import { Hospital } from "lucide-react";

function HospitalCard() {
    const {data} = useHospitalContext()
  return (
    <div className="w-[97%] bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm h-[4.8rem]">
            <div className="p-2 bg-green-300 rounded-full"><Hospital/>
            </div>
            <div className="flex flex-col">
                <p className="md:text-sm text-xs text-black font-semibold">{data?.hospital_name}</p>
                <p className="md:text-sm text-xs text-black font-semibold">{data?.claimbook_uhid}</p>
            </div>
        </div>
  )
}

export default HospitalCard

