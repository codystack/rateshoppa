/**
 * Currencies API Service
 * 
 * Service for fetching currency data from the backend
 */

import { apiClient, ApiResponse } from './client';

export interface CurrenciesData {
  count: number;
  currencies: string[];
}

/**
 * Fetch available currencies from the API
 * 
 * @returns Promise with currencies data
 */
export async function getCurrencies(): Promise<ApiResponse<CurrenciesData>> {
  return apiClient<CurrenciesData>('/api/rates/currencies');
}
