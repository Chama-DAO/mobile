// sets default to missing fields of a created chama

import { CreateChamaSchema } from "@/app/create/schema";
import { generateChamaId } from "./generateId";

interface CreatedChama {
  chamaAddress: string;
  name: string;
  profileImage: string;
  location: string;
  description: string;
  maximumMembers: number;
  registrationFeeRequired: boolean;
  registrationFeeAmount: number;
  contributionAmount: number;
  contributionPeriod: "weekly" | "monthly" | "daily" | "yearly";
  contributionPenalty: number;
  maximumLoanAmount: number;
  loanInterestRate: number;
  loanTerm: string;
  loanPenalty: number;
}

export const setDefaults = (data: CreatedChama): CreateChamaSchema => {
  // generate random ID
  const ID = generateChamaId();
  const finalChamaData: CreateChamaSchema = {
    ...data,
    chamaId: ID,
    dateCreated: new Date().toISOString(),
    payoutPeriod: "yearly",
    payoutPercentageAmount: 80,
    registrationFeeCurrency: "KES",
    totalContributions: 0,
    totalPayouts: 0,
    totalLoans: 0,
    totalLoanRepayments: 0,
    totalLoanPenalties: 0,
    penalties: [],
    contributions: [],
    loans: [],
    payouts: [],
    members: [],
    penaltyExpirationPeriod: 0,
    loanPenaltyExpirationPeriod: 0,
    minContributionRatio: 5,
  };
  return finalChamaData;
};
