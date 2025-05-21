// this is HospitalData.tsx

import { useEffect } from "react";
import { useHospitalContext } from "../context/HospitalContext"
import axios from "axios";

const HospitalData = () => {
    const {data,setData, setLoading, setError } = useHospitalContext();
    if(data) return;
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await axios.get(`https://15734573-beec-42a6-9f83-e25fb78af6f2.mock.pstmn.io/hcassigment`)
                setData(result.data || null);
            } catch(error:any) {
                setError(error.message || "something went wrong");
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return null;
}

export default HospitalData;