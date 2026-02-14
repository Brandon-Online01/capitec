"use client";

import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
import { HelpCircle, Circle, Clock } from "lucide-react";
import {
  getPopularTimes,
  TYPICAL_VISIT_TEXT_BRANCH,
  TYPICAL_VISIT_TEXT_ATM,
  type DayIndex,
} from "@/data/popular-times";

/** Visit bar shows only 9 AM–5 PM. */
const WORK_START_HOUR = 9;
const WORK_END_HOUR = 17;

const DAY_LABELS: { day: DayIndex; label: string }[] = [
  { day: 1, label: "MON" },
  { day: 2, label: "TUE" },
  { day: 3, label: "WED" },
  { day: 4, label: "THU" },
  { day: 5, label: "FRI" },
  { day: 6, label: "SAT" },
  { day: 0, label: "SUN" },
];

function formatHour(hour: number): string {
  if (hour === 0) return "12am";
  if (hour < 12) return `${hour}am`;
  if (hour === 12) return "12pm";
  return `${hour - 12}pm`;
}

interface PopularTimesChartProps {
  branchId: number;
  branchName?: string;
  /** "branch" = more time (10–45 min), "atm" = less time */
  locationType?: "branch" | "atm";
}

export function PopularTimesChart({ branchId, branchName, locationType = "branch" }: PopularTimesChartProps) {
  const [selectedDay, setSelectedDay] = useState<DayIndex>(() => {
    const d = new Date().getDay() as DayIndex;
    return d;
  });

  const popularTimes = useMemo(() => getPopularTimes(branchId), [branchId]);
  const fullDayData = popularTimes[selectedDay] ?? [];
  const dayData = useMemo(
    () =>
      fullDayData.filter(
        (p) => p.hour >= WORK_START_HOUR && p.hour <= WORK_END_HOUR
      ),
    [fullDayData]
  );

  const now = useMemo(() => new Date(), []);
  const currentDay = now.getDay() as DayIndex;
  const currentHour = now.getHours();
  const isCurrentDay = currentDay === selectedDay;

  const dayAverage = useMemo(() => {
    if (dayData.length === 0) return 0;
    const sum = dayData.reduce((s, p) => s + p.busyPercent, 0);
    return sum / dayData.length;
  }, [dayData]);

  const currentBusyness =
    isCurrentDay && currentHour >= WORK_START_HOUR && currentHour <= WORK_END_HOUR
      ? dayData.find((p) => p.hour === currentHour)?.busyPercent ?? 0
      : null;
  const liveStatus =
    currentBusyness !== null
      ? currentBusyness > dayAverage
        ? "Busier than usual"
        : "Usually no wait"
      : null;

  const chartData = useMemo(
    () =>
      dayData.map((d) => ({
        ...d,
        label: formatHour(d.hour),
        isCurrent: isCurrentDay && d.hour === currentHour,
        isBusy: d.busyPercent >= dayAverage,
      })),
    [dayData, isCurrentDay, currentHour, dayAverage]
  );

  const barBusyFill = "var(--primary-red)";
  const barNotBusyFill = "var(--primary-green)";

  const chartSummaryId = "popular-times-chart-summary";
  return (
    <section
      className="rounded border border-[var(--gray-f5)] p-4"
      aria-label={`Popular times for ${branchName ?? "this branch"}`}
      aria-describedby={chartSummaryId}
    >
      <p id={chartSummaryId} className="sr-only">
        Busyness by hour from 9am to 5pm. Use day tabs to change the day.
      </p>
      <div className="mb-3 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-[var(--gray-333)]">
          Popular times
        </h3>
        <span
          className="text-[var(--gray-333)]/60"
          title="Typical busyness by hour for this branch"
          aria-label="Information about popular times"
        >
          <HelpCircle className="h-4 w-4" />
        </span>
      </div>

      <div
        className="mb-2 flex flex-wrap gap-1"
        role="tablist"
        aria-label="Select day of week"
      >
        {DAY_LABELS.map(({ day, label }) => (
          <button
            key={day}
            type="button"
            role="tab"
            aria-selected={selectedDay === day}
            aria-label={`Show popular times for ${label}`}
            onClick={() => setSelectedDay(day)}
            className={`rounded-none box-content px-2 py-1 text-sm font-medium transition-colors [background-clip:unset] [-webkit-background-clip:unset] ${
              selectedDay === day
                ? "border-b-2 border-[var(--primary-blue)] text-[var(--primary-blue)]"
                : "text-[var(--gray-333)]/80 hover:text-[var(--gray-333)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {liveStatus && isCurrentDay && (
        <div className="mb-2 flex items-center gap-2 text-detail">
          <Circle
            className="h-2 w-2 fill-[var(--primary-red)] text-[var(--primary-red)]"
            aria-hidden
          />
          <span className="text-[var(--gray-333)]">
            Live: {liveStatus}
          </span>
        </div>
      )}

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            aria-label="Hourly busyness chart"
          >
            <XAxis
              dataKey="hour"
              tickFormatter={(hour: number) => formatHour(hour)}
              tick={{ fontSize: 11, fill: "var(--gray-333)" }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              hide
              domain={[0, 100]}
            />
            <Tooltip
              formatter={(value: number) => [`${value}% busy`, "Busyness"]}
              labelFormatter={(hour: number) => formatHour(hour)}
              contentStyle={{
                backgroundColor: "var(--gray-f5)",
                border: "none",
                borderRadius: "4px",
              }}
            />
            {isCurrentDay &&
              currentHour >= WORK_START_HOUR &&
              currentHour <= WORK_END_HOUR && (
                <ReferenceLine
                  x={currentHour}
                  stroke="var(--primary-red)"
                  strokeDasharray="2 2"
                  strokeWidth={1}
                />
              )}
            <Bar
              dataKey="busyPercent"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
              isAnimationActive={false}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.isBusy ? barBusyFill : barNotBusyFill}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-2 flex items-center gap-2 text-detail text-[var(--gray-333)]/80">
        <Clock className="h-4 w-4 shrink-0" aria-hidden />
        {locationType === "atm" ? TYPICAL_VISIT_TEXT_ATM : TYPICAL_VISIT_TEXT_BRANCH}
      </p>
    </section>
  );
}
