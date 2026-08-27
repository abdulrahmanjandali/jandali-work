export type FundingItem = {
  source: string;
  amount: string;
  year: string;
  kind: string;
};

export const fundingBreakdown: FundingItem[] = [
  { source: 'Business Gateway, UDST', amount: '11,000 CAD', year: '2024', kind: 'Grant' },
  { source: 'Business Gateway, UDST', amount: '2,000 CAD', year: '2023', kind: 'Cash prize' },
  { source: 'Business Gateway, CNA-Q', amount: '8,000 CAD', year: '2020', kind: 'Cash prize' },
];

export const fundingTotal = '21,000 CAD';
export const fundingLabel = 'won across three Business Gateway programs. 13,000 of it went to Junior Talk.';

export const proofStats = [
  { value: '21,000', unit: 'CAD', label: 'won in grants and prizes' },
  { value: '7,000+', unit: '', label: 'students reached through Junior Talk' },
  { value: '200,000+', unit: '', label: 'LinkedIn impressions in one month' },
  { value: '30+', unit: '', label: 'public events represented or covered' },
];
