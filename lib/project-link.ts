import { useSyncExternalStore } from "react";

/**
 * The open project lives in the URL hash (#project-<slug>), so a project's
 * detail view can be linked to directly and survives a reload.
 */
const PREFIX = "#project-";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

const getSnapshot = () => window.location.hash;
const getServerSnapshot = () => "";

export function useOpenProjectSlug(): string | null {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return hash.startsWith(PREFIX) ? hash.slice(PREFIX.length) : null;
}

function setHash(hash: string) {
  // replaceState keeps the back button clean; it does not fire hashchange
  // itself, so announce the change for subscribers.
  window.history.replaceState(
    null,
    "",
    hash || window.location.pathname + window.location.search
  );
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function openProject(slug: string) {
  setHash(PREFIX + slug);
}

export function closeProject() {
  if (window.location.hash.startsWith(PREFIX)) setHash("");
}

export function projectUrl(slug: string) {
  return `${window.location.origin}${window.location.pathname}${PREFIX}${slug}`;
}
