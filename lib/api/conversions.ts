/**
 * Conversion/Rates API Service
 * 
 * Service for fetching currency conversion rates from merchants
 */

import { apiClient, ApiResponse } from './client';

export interface TransferFee {
  fee: number;
  currency: string;
}

export interface Conversion {
  merchantId: string;
  merchantName: string;
  logo: string;
  website: string;
  rate: number;
  transferFee: TransferFee;
  effectiveRate: number;
  lastUpdated: string;
}

export interface ConversionData {
  from: string;
  to: string;
  count: number;
  sortedByBestRate: boolean;
  conversions: Conversion[];
}

/**
 * Fetch conversion rates from the API
 * 
 * @param from - Source currency code
 * @param to - Target currency code
 * @returns Promise with conversion data
 */
export async function getConversionRates(
  from: string,
  to: string
): Promise<ApiResponse<ConversionData>> {
  return apiClient<ConversionData>(`/api/rates/convert?from=${from}&to=${to}`);
}
