"use client";

import { useEffect, useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * The "handled" tick — same path as the brand mark (TickMark), scaled down.
 * Lives in the top-right of any day cell we want to flag as completed.
 */
function HandledTick({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 24.5 L21.5 32 L34 16"
        fill="none"
        stroke="var(--color-terracotta)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DiaryCard() {
  // Initial render (SSR + first client render) leaves `now` null so the
  // server- and client-rendered HTML match exactly. After mount we compute
  // the real date, which causes a re-render with today's content.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const month = now?.getMonth() ?? 0;
  const year = now?.getFullYear() ?? 0;
  const today = now?.getDate() ?? 0;

  const firstDow = now ? new Date(year, month, 1).getDay() : 0;
  const daysInMonth = now ? new Date(year, month + 1, 0).getDate() : 31;

  const handledDays = now
    ? [today - 2, today - 5, today - 9].filter((d) => d >= 1)
    : [];

  let hebrewDate = "";
  if (now) {
    try {
      hebrewDate = new Intl.DateTimeFormat("he-u-ca-hebrew", {
        day: "numeric",
        month: "long",
      }).format(now);
    } catch {
      hebrewDate = "";
    }
  }

  // Build the grid: blanks before day-1, then real days, padded to fill rows.
  const cells: Array<{
    day: number | null;
    isToday: boolean;
    isPast: boolean;
    isHandled: boolean;
  }> = [];
  if (now) {
    for (let i = 0; i < firstDow; i++) {
      cells.push({ day: null, isToday: false, isPast: false, isHandled: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        day: d,
        isToday: d === today,
        isPast: d < today,
        isHandled: handledDays.includes(d),
      });
    }
  } else {
    // Stable skeleton: 35 empty cells so layout doesn't shift on hydration.
    for (let i = 0; i < 35; i++) {
      cells.push({ day: null, isToday: false, isPast: false, isHandled: false });
    }
  }
  while (cells.length < 35) {
    cells.push({ day: null, isToday: false, isPast: false, isHandled: false });
  }

  return (
    <div className="relative w-full max-w-[390px] mx-auto pt-3">
      {/* Spiral binding — 9 little holes sitting on the top edge of the card. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 flex justify-center gap-[18px] sm:gap-[22px] px-10 pointer-events-none"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="block h-[9px] w-[9px] rounded-full bg-cream-darker border border-brand-border"
          />
        ))}
      </div>

      <div
        className="relative rounded-2xl border border-brand-border shadow-[0_18px_40px_rgba(42,37,32,0.10)] px-5 sm:px-6 pt-7 pb-5 transition-transform duration-200 rotate-[-1.5deg] md:rotate-[-2deg] [@media(hover:hover)]:hover:rotate-[-1deg]"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, var(--color-cream) 100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-[32px] sm:text-[34px] leading-none text-ink">
              {now ? MONTHS[month] : " "}
            </h3>
            <p className="mt-1 text-[13px] text-muted-brand">
              {now ? year : " "}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.125em] text-muted-brand">
              Today
            </p>
            <p
              dir="rtl"
              className="mt-0.5 text-[13px] text-terracotta font-medium"
            >
              {hebrewDate || " "}
            </p>
          </div>
        </div>

        {/* Weekday row */}
        <div className="mt-5 grid grid-cols-7 text-center text-[11px] font-semibold uppercase tracking-[0.06em]">
          {WEEKDAYS.map((w, i) => (
            <span
              key={w}
              className={
                i === 5 || i === 6
                  ? "text-terracotta/80"
                  : "text-muted-brand"
              }
            >
              {w}
            </span>
          ))}
        </div>

        {/* Day grid */}
        <div className="mt-2 grid grid-cols-7 gap-y-1">
          {cells.map((c, i) => (
            <div
              key={i}
              className="relative aspect-square flex items-center justify-center"
            >
              {c.day !== null ? (
                <>
                  {c.isToday ? (
                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-terracotta text-cream text-[13px] font-semibold">
                      {c.day}
                    </span>
                  ) : (
                    <span
                      className={`text-[13px] ${
                        c.isPast ? "text-muted-brand" : "text-ink-soft"
                      }`}
                    >
                      {c.day}
                    </span>
                  )}
                  {c.isHandled && !c.isToday ? (
                    <span className="absolute top-[2px] right-[3px]">
                      <HandledTick size={12} />
                    </span>
                  ) : null}
                </>
              ) : null}
            </div>
          ))}
        </div>

        {/* Footer: dashed top border + the same tick + caption */}
        <div className="mt-4 pt-3 border-t border-dashed border-brand-border flex items-center gap-2">
          <HandledTick size={14} />
          <p className="text-[13px] italic text-muted-brand">
            This week, handled.
          </p>
        </div>
      </div>
    </div>
  );
}
