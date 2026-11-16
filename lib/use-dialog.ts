import { useEffect, type RefObject } from "react";

/**
 * Keeps a native <dialog> in step with a boolean, and stops the page behind
 * it from scrolling while it is open. The element handles focus trapping and
 * focus return on its own.
 *
 * Every close goes through `onClose` and the caller's state. Escape raises
 * `cancel`, which is taken over here. The element's own `close` event is
 * deliberately not used: it is dispatched late, and can arrive after the
 * dialog has been opened again, closing the wrong thing.
 */
export function useDialog(
  ref: RefObject<HTMLDialogElement | null>,
  open: boolean,
  onClose: () => void
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    el.addEventListener("cancel", onCancel);
    return () => el.removeEventListener("cancel", onCancel);
  }, [ref, onClose]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
    if (!open) return;

    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [ref, open]);
}
