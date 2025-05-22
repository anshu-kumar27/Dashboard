
import { useHospitalContext } from '../../context/HospitalContext';
import { ClaimAmountChart } from '../../components/graphs/ClaimAmountChart';
import { format } from 'date-fns'
function ClaimAmtWithTime() {
    const { data } = useHospitalContext();

    const claimAmountsOverTime = data?.claims_data
        ? Object.values(data.claims_data).map((claim: any) => ({
            date: format(new Date(claim.claim_date), "MMM dd"),
            amount: claim.claim_amount,
        }))
        : [];

    return (
        <>
            <ClaimAmountChart data={claimAmountsOverTime} />
        </>
    )
}

export default ClaimAmtWithTime