import { createContext, useContext, useState, type ReactNode } from "react";
import type { HospitalFinanceData } from "../types/HospitalData";


interface HospitalContextType {
    data: HospitalFinanceData | null;
    setData: (data: HospitalFinanceData | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;

}

const defaultContext: HospitalContextType = {
    data: null,
    setData: () => { },
    loading: false,
    setLoading: () => { },
    error: null,
    setError: () => { },
}

const HospitalContext = createContext<HospitalContextType>(defaultContext);

interface HospitalProviderProps {
    children: ReactNode;
}

export const HospitalContextProvider = ({ children }: HospitalProviderProps) => {
    const [data, setData] = useState<HospitalFinanceData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <HospitalContext.Provider value={{ data, setData, loading, setLoading, error, setError }}>
            {children}
        </HospitalContext.Provider>
    )
}

export const useHospitalContext = () => useContext(HospitalContext)