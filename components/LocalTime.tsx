"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "America/New_York",
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 20_000);
  return () => window.clearInterval(id);
}

// The string only changes once a minute, so re-renders stay that rare.
const getSnapshot = () => format.format(new Date());
const getServerSnapshot = () => "";

/** The current time where Rainul is, for anyone working out when to reach him. */
export function LocalTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!time) return null;
  return (
    <span className="text-muted-ink [font-variant-numeric:tabular-nums]">
      {" "}
      · {time}
    </span>
  );
}
