import { memo, type ReactElement } from "react";
import ReactApexChart from "react-apexcharts";
import type ApexCharts from "apexcharts";

type Series = ApexCharts.ApexOptions["series"];

type ChartCardProps = {
  title: string;
  type:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  options: ApexCharts.ApexOptions;
  series: Series;
  height: number;
  containerClassName?: string;
  extra?: ReactElement;
};

function ChartCard({
  title,
  type,
  options,
  series,
  height,
  containerClassName,
  extra,
}: ChartCardProps): ReactElement {
  return (
    <div className={`rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 shadow-lg ${containerClassName || ""}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {extra && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm">
            {extra}
          </div>
        )}
      </div>
      <ReactApexChart type={type} options={options} series={series as any} height={height} />
    </div>
  );
}

export default memo(ChartCard);

