import { useEffect, useRef, useState } from "react";

type RawKline = [number, string, string, string, string] | any[];
type CandlePoint = { x: number; y: [number, number, number, number] };

function toMs(ts: number): number {
    // Convert seconds to ms if needed
    return ts < 1_000_000_000_000 ? ts * 1000 : ts;
}

export function useCandlesStream(
    pair: string | null,
    initialKlines: RawKline[] | undefined,
    enabled: boolean,
    maxPoints: number = 100
): CandlePoint[] {
    const [candles, setCandles] = useState<CandlePoint[]>([]);
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<number | null>(null);
    const throttleTimeoutRef = useRef<number | null>(null);
    const latestCandleRef = useRef<CandlePoint | null>(null);
    const [isVisible, setIsVisible] = useState(
        typeof document === "undefined" ? true : document.visibilityState === "visible"
    );

    // Seed from initial klines when available
    useEffect(() => {
        if (!enabled || !initialKlines || initialKlines.length === 0) return;
        const formatted = initialKlines.map((c: any) => ({
            x: toMs(c[0]),
            y: [parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]), parseFloat(c[4])],
        })) as CandlePoint[];
        setCandles(formatted);
    }, [enabled, initialKlines]);

    // Pause updates when tab is hidden; resume on visible
    useEffect(() => {
        function onVisibilityChange() {
            setIsVisible(document.visibilityState === "visible");
        }
        if (typeof document !== "undefined") {
            document.addEventListener("visibilitychange", onVisibilityChange);
            return () => document.removeEventListener("visibilitychange", onVisibilityChange);
        }
    }, []);

    // Websocket lifecycle
    useEffect(() => {
        if (!enabled || !pair || !isVisible) return;

        const url = `wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@kline_1m`;
        const connect = () => {
            // Close any existing connection first
            if (wsRef.current && wsRef.current.readyState !== WebSocket.CLOSED) {
                try { wsRef.current.close(); } catch {}
            }
            wsRef.current = new WebSocket(url);

            wsRef.current.onerror = (err) => {
                // eslint-disable-next-line no-console
                console.error("Binance WS error:", err);
            };
            wsRef.current.onmessage = (event: MessageEvent) => {
                try {
                    const msg = JSON.parse(event.data);
                    if (msg.e !== "kline") return;
                    const k = msg.k;
                    const isFinalForMinute = Boolean(k?.x);
                    const newCandle: CandlePoint = {
                        x: Number(k.t),
                        y: [parseFloat(k.o), parseFloat(k.h), parseFloat(k.l), parseFloat(k.c)],
                    };
                    latestCandleRef.current = newCandle;

                    const flush = () => {
                        const candleToApply = latestCandleRef.current;
                        latestCandleRef.current = null;
                        if (!candleToApply) return;
                        const currentTime = candleToApply.x;
                        setCandles((prev) => {
                            const updated = [...prev];
                            const lastTime = updated.length ? updated[updated.length - 1].x : null;
                            if (lastTime && currentTime === lastTime) {
                                updated[updated.length - 1] = candleToApply;
                            } else {
                                if (updated.length >= maxPoints) updated.shift();
                                updated.push(candleToApply);
                            }
                            return updated;
                        });
                    };

                    // Throttle to at most once per 1000ms, but always flush final candles immediately
                    if (isFinalForMinute) {
                        if (throttleTimeoutRef.current) {
                            window.clearTimeout(throttleTimeoutRef.current);
                            throttleTimeoutRef.current = null;
                        }
                        flush();
                    } else if (throttleTimeoutRef.current == null) {
                        throttleTimeoutRef.current = window.setTimeout(() => {
                            throttleTimeoutRef.current = null;
                            flush();
                        }, 1000);
                    }
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.error("Error processing Binance WS message:", err);
                }
            };
            wsRef.current.onclose = () => {
                if (reconnectTimeoutRef.current) window.clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = window.setTimeout(() => {
                    connect();
                }, 5000);
            };
        };

        connect();

        return () => {
            if (reconnectTimeoutRef.current) window.clearTimeout(reconnectTimeoutRef.current);
            if (throttleTimeoutRef.current) {
                window.clearTimeout(throttleTimeoutRef.current);
                throttleTimeoutRef.current = null;
            }
            if (wsRef.current && wsRef.current.readyState !== WebSocket.CLOSED) {
                try { wsRef.current.close(); } catch {}
            }
        };
    }, [enabled, pair, maxPoints, isVisible]);

    return candles;
}

