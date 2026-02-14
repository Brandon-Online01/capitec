/**
 * Hourly busyness for a single day (0–23).
 * 0 = Sunday, 1 = Monday, … 6 = Saturday (JavaScript getDay()).
 */
export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface HourBusyness {
  hour: number;
  busyPercent: number;
}

export type PopularTimesByDay = Record<DayIndex, HourBusyness[]>;

/** Build 24-hour series: low night, ramp morning, peak midday & late afternoon, low evening */
function buildDayPattern(
  morningPeak: number,
  middayPeak: number,
  afternoonPeak: number
): HourBusyness[] {
  const data: HourBusyness[] = [];
  for (let hour = 0; hour < 24; hour++) {
    let p = 5;
    if (hour >= 7 && hour <= 9) p = 20 + (hour - 6) * 15;
    else if (hour >= 10 && hour <= 11) p = morningPeak;
    else if (hour === 12) p = Math.min(middayPeak - 10, 60);
    else if (hour >= 13 && hour <= 16) p = middayPeak;
    else if (hour >= 17 && hour <= 18) p = afternoonPeak;
    else if (hour >= 19 && hour <= 20) p = 40 + (20 - hour) * 15;
    else if (hour >= 21 || hour <= 6) p = 5 + Math.min(hour, 24 - hour);
    data.push({ hour, busyPercent: Math.min(100, Math.max(0, p)) });
  }
  return data;
}

/** Generic 7-day popular times (weekdays busier than weekend; 0=Sun, 6=Sat). */
const MON_FRI: PopularTimesByDay = {
  0: buildDayPattern(40, 50, 55),
  1: buildDayPattern(70, 80, 90),
  2: buildDayPattern(72, 82, 88),
  3: buildDayPattern(72, 82, 90),
  4: buildDayPattern(75, 85, 92),
  5: buildDayPattern(70, 78, 85),
  6: buildDayPattern(40, 50, 55),
} as PopularTimesByDay;

/** Mock popular times – same pattern for all branches; keyed by branch id for future per-branch data. */
const cache = new Map<number, PopularTimesByDay>();

function getPopularTimesForBranch(_branchId: number): PopularTimesByDay {
  return MON_FRI;
}

/**
 * Returns popular times data for a branch. Uses generic mock pattern for all branches.
 * @param branchId – branch id (used for future per-branch variants)
 */
export function getPopularTimes(branchId: number): PopularTimesByDay {
  let data = cache.get(branchId);
  if (!data) {
    data = getPopularTimesForBranch(branchId);
    cache.set(branchId, data);
  }
  return data;
}

/** Visit duration: branches 10–45 min; ATMs less time. */
export const BRANCH_VISIT_AVG_MINUTES = 10;
export const BRANCH_VISIT_MAX_MINUTES = 45;

/** Typical visit text for branches (avg 10 min, max 45 min). */
export const TYPICAL_VISIT_TEXT_BRANCH =
  "People typically spend 10–45 min here";

/** Typical visit text for ATMs (less time than branches). */
export const TYPICAL_VISIT_TEXT_ATM =
  "People typically spend less time here (quick visit)";
