import { useActiveOrders } from "@/hooks/useActiveOrders";
import { useCandlesStream } from "@/hooks/useCandlesStream";
import { useKlines } from "@/hooks/useKlines";
import { useOrdersCandleOptions } from "@/hooks/useOrdersCandleOptions";
import ChartCard from "./ChartCard";
import { motion } from "framer-motion";

const OrdersChartSection = () => {
  // Fetch active orders data with 5 second refresh interval (for markers/annotations)
  const { data, isLoading: ordersLoading, isError } = useActiveOrders(200, 5000);

  // Extract trading pair from first order
  const tradingPair = data?.data?.[0]?.symbol || null;

  // Fetch initial klines data from Binance (only if we have a trading pair)
  const klinesQuery = useKlines(tradingPair || "BTCUSDT", '1m', 100);

  // Use live candle stream from Binance for the actual candlestick data
  const candles = useCandlesStream(tradingPair, klinesQuery.data, Boolean(tradingPair), 100);
  
  // Get chart options with active orders as annotations/markers
  const chartOptions = useOrdersCandleOptions(candles, data?.data || []);
  
  const isLoading = ordersLoading || candles.length === 0;

  // Don't render if there's an error or no data or no symbol
  if (isError || !data || !data.data || data.data.length === 0 || !tradingPair) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Live Trading Chart
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time price action with live buy and sell order markers from our trading system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center p-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-muted-foreground">Loading market data...</p>
              </div>
            </div>
          ) : candles.length === 0 ? (
            <div className="text-center p-12 bg-card/50 backdrop-blur-sm rounded-xl border border-border/40">
              <p className="text-muted-foreground">No market data available at the moment.</p>
            </div>
          ) : (
            <ChartCard
              title={`📈 ${tradingPair} Live Chart with Order Markers`}
              type="candlestick"
              options={chartOptions}
              series={[{ name: tradingPair, data: candles }] as any}
              height={400}
              extra={
                <>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">Live Stream</span>
                </>
              }
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OrdersChartSection;

