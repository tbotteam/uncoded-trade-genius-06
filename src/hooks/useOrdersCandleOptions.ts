import { useMemo } from "react";
import type ApexCharts from "apexcharts";
import { ActiveOrder } from "./useActiveOrders";

type CandlePoint = { x: number; y: [number, number, number, number] };

export function useOrdersCandleOptions(
  candles: CandlePoint[],
  activeOrders: ActiveOrder[]
): ApexCharts.ApexOptions {
  return useMemo(() => {
    const GREEN = "#10b981"; // Emerald green
    const RED = "#ef4444"; // Red
    
    const lastClose = candles.length ? candles[candles.length - 1].y[3] : null;
    
    // Create annotations from active sell orders (markers on the chart)
    const sellAnnotations = activeOrders
      .filter(o => o.sellPrice)
      .map(o => parseFloat(o.sellPrice))
      .filter((p, idx, arr) => !isNaN(p) && arr.indexOf(p) === idx) // Unique prices only
      .filter(price => lastClose === null || price > lastClose)
      .slice(0, 10) // Limit to 10 annotations
      .map((price) => ({
        y: price,
        borderColor: "#f59e0b",
        strokeDashArray: 4,
        borderWidth: 2,
        label: {
          borderColor: "#f59e0b",
          offsetX: -80,
          textAnchor: "end" as const,
          style: {
            color: "#fff",
            background: "#f59e0b",
            fontSize: "11px",
          },
          text: `Sell: $${price.toFixed(2)}`,
        },
      }));
    
    // Create point annotations for buy orders (markers at specific points)
    const buyAnnotations = activeOrders
      .filter(o => o.buyPrice && o.buyTime)
      .slice(0, 20) // Limit to 20 points
      .map((order) => ({
        x: new Date(order.buyTime).getTime(),
        y: parseFloat(order.buyPrice),
        marker: {
          size: 6,
          fillColor: "#10b981",
          strokeColor: "#fff",
          strokeWidth: 2,
          shape: "circle" as const,
        },
        label: {
          borderColor: "#10b981",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#10b981",
            fontSize: "10px",
          },
          text: `Buy: $${parseFloat(order.buyPrice).toFixed(2)}`,
        },
      }));
    
    const sellMax = activeOrders.length
      ? Math.max(...activeOrders.map((o: any) => parseFloat(o.sellPrice || 0)))
      : 0;
    const candleHigh = candles.length ? Math.max(...candles.map((c: any) => c.y[1])) : 0;
    const yMax = Math.max(sellMax, candleHigh) || undefined;

    return {
      chart: {
        type: "candlestick",
        height: 350,
        zoom: { 
          enabled: true, 
          autoScaleYaxis: true, 
          allowMouseWheelZoom: false 
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
        background: "transparent",
      },
      grid: {
        borderColor: "rgba(148, 163, 184, 0.1)",
        strokeDashArray: 4,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } },
        padding: { bottom: 0 },
      },
      xaxis: { 
        type: "datetime", 
        labels: { 
          style: { 
            colors: "#94a3b8", 
            fontSize: "11px" 
          },
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM \'yy',
            day: 'dd MMM',
            hour: 'HH:mm',
          },
        } 
      },
      yaxis: { 
        opposite: true, 
        tooltip: { enabled: true }, 
        labels: { 
          style: { 
            colors: "#94a3b8", 
            fontSize: "11px" 
          },
          formatter: (val: number) => `$${val.toFixed(2)}`,
        }, 
        max: yMax 
      },
      plotOptions: { 
        candlestick: { 
          colors: { 
            upward: GREEN, 
            downward: RED 
          }, 
          wick: { 
            useFillColor: true 
          } 
        } 
      },
      annotations: { 
        yaxis: sellAnnotations as any,
        points: buyAnnotations as any,
      },
      tooltip: { 
        theme: "dark", 
        y: { 
          formatter: (val: number) => `$${val.toFixed(4)}` 
        } 
      },
    } as ApexCharts.ApexOptions;
  }, [candles, activeOrders]);
}

