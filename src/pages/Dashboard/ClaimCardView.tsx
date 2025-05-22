
import { ClaimsStatusChart } from '../../components/graphs/ClaimStatusChart'
import { useHospitalContext } from '../../context/HospitalContext';

function ClaimCardView() {
    const { data } = useHospitalContext();
    let paidCount = 0;
    let pendingCount = 0;

    if (data?.claims_data) {
        const statusMap = Object.values(data.claims_data).reduce(
            (acc, claim: any) => {
                if (claim.claim_status === "Paid") acc.paid += 1;
                else if (claim.claim_status === "Pending") acc.pending += 1;
                return acc;
            },
            { paid: 0, pending: 0 }
        );

        paidCount = statusMap.paid;
        pendingCount = statusMap.pending;
    }
    return (
        <>
            <ClaimsStatusChart paid={paidCount} pending={pendingCount} />
        </>
    )
}

export default ClaimCardView