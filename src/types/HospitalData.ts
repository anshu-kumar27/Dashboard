// src/types/HospitalData.ts

export interface Claim {
  claim_id: string;
  claim_amount: number;
  claim_date: string;
  claim_status: string;
}

export interface ClaimsData {
  [key: string]: Claim;
}

export interface HospitalFinanceData {
  hospital_name: string;
  claimbook_uhid: string;
  total_limit_allocated: number;
  subvention_per_claim: number;
  repayment_tenure: string;
  current_limit_utilised_percentage: number;
  current_unutilised_funds_percentage: number;
  current_limit_utilised: number;
  current_unutilised_funds: number;
  bill_amount_discounted_to_date: number;
  amount_repaid_to_date: number;
  interest_paid_on_borrowed_amt_to_date: number;
  upcoming_repayment_date: string;
  disbursals_amount: number;
  repayments_amount: number;
  total_interest_amount: number;
  total_due: number;
  amount_to_be_repaid_on_upcoming_date: number;
  claims_data: ClaimsData;
}
