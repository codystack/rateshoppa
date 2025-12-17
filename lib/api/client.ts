/**
 * API Client Configuration
 * 
 * Centralized HTTP client for making API requests
 */

// Base URL for API requests - can be overridden via environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rates-shoppa-backend.onrender.com';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface ApiError {
  success: false;
  error: {
    message: string;
    code?: string;
  };
  timestamp: string;
}

/**
 * Main fetch wrapper with error handling
 */
export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Client Error:', error);
    throw error;
  }
}

export { API_BASE_URL };
