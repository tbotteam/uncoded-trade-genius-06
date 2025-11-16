import { useQuery } from '@tanstack/react-query';

type RawKline = [number, string, string, string, string];

async function fetchKlines(pair: string, interval: string = '1m', limit: number = 100): Promise<RawKline[]> {
  const url = `https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${interval}&limit=${limit}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch klines');
  }
  
  return response.json();
}

export function useKlines(pair: string, interval: string = '1m', limit: number = 100) {
  return useQuery({
    queryKey: ['klines', pair, interval, limit],
    queryFn: () => fetchKlines(pair, interval, limit),
    staleTime: 60000, // 1 minute
    refetchOnWindowFocus: false,
  });
}

