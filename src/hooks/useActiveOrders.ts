import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '@/config';

export interface ActiveOrder {
  id: number;
  buyPrice: string;
  sellPrice: string;
  buyTime: string;
  sellTime?: string;
  amount: string;
  profit?: string;
  [key: string]: any;
}

export interface ActiveOrdersResponse {
  data: ActiveOrder[];
  count: number;
}

async function fetchActiveOrders(limit?: number): Promise<ActiveOrdersResponse> {
  const url = limit 
    ? `${API_BASE_URL}/api/activeorders?limit=${limit}`
    : `${API_BASE_URL}/api/activeorders`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch active orders');
  }
  
  return response.json();
}

export function useActiveOrders(limit?: number, refetchInterval?: number) {
  return useQuery({
    queryKey: ['activeOrders', limit],
    queryFn: () => fetchActiveOrders(limit),
    refetchInterval: refetchInterval || 5000, // Refetch every 5 seconds by default
    refetchIntervalInBackground: true,
    staleTime: 0,
  });
}

