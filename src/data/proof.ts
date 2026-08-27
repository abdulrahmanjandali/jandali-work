/**
 * The 21,000+ CAD figure invites a follow-up question, so the site answers it
 * before anyone has to ask. Fill in the components below and the breakdown
 * renders under the number. Leave it empty and the number renders alone, which
 * is the weaker version.
 */

export type FundingItem = {
  source: string; // e.g. "Qatar Business Incubation Center pitch prize"
  amount: string; // e.g. "8,000 CAD"
  year: string;
};

export const fundingBreakdown: FundingItem[] = [
  // TODO: list the grants and prizes that add up to 21,000+. Example shape:
  // { source: 'TODO grant or competition name', amount: 'TODO CAD', year: 'TODO' },
];

export const fundingTotal = '21,000+ CAD';
export const fundingLabel = 'in combined grants and prizes for Junior Talk';

export const proofStats = [
  { value: '21,000+', unit: 'CAD', label: 'raised in grants and prizes' },
  { value: '7,000+', unit: '', label: 'students reached through Junior Talk' },
  { value: '200,000+', unit: '', label: 'LinkedIn impressions in one month' },
  { value: '30+', unit: '', label: 'public events represented or covered' },
];
