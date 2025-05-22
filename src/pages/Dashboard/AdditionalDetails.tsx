import React from "react";
import { useHospitalContext } from "../../context/HospitalContext";


const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white rounded-lg px-4 py-2 flex flex-col items-start shadow-md w-[47%]">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-semibold text-gray-800">{value}</p>
  </div>
);

const AdditionalDetails: React.FC = () => {
  const { data } = useHospitalContext();

  if (!data) return null; // or show a loading fallback

  return (
    <div className="w-full flex flex-wrap justify-start gap-4 md:mt-0 mt-8 md:pr-1 pr-2 flex-row">
      <DetailItem
        label="Subvention/Claim"
        value={formatINR(data.subvention_per_claim)}
      />
      <DetailItem
        label="Interest Paid"
        value={formatINR(data.interest_paid_on_borrowed_amt_to_date)}
      />
      <DetailItem
        label="Total Interest Amt"
        value={formatINR(data.total_interest_amount)}
      />
      <DetailItem
        label="Total Disbursals"
        value={formatINR(data.disbursals_amount)}
      />
      <DetailItem
        label="Total Repayments"
        value={formatINR(data.repayments_amount)}
      />
      <DetailItem
        label="Total Due"
        value={formatINR(data.total_due)}
      />
    </div>
  );
};

export default AdditionalDetails;
