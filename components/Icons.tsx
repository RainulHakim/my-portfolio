/**
 * Hand-drawn icon set on a 16px grid with butt caps and a 1.6 stroke.
 * Deliberately not a stock icon library: the geometry, weights and caps
 * are our own so the site does not inherit a recognisable default look.
 */
type P = { className?: string };

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
};

export const ArrowDown = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M8 2.5v11M3.5 9.5 8 14l4.5-4.5" />
  </svg>
);

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M2.5 8h11M9.5 3.5 14 8l-4.5 4.5" />
  </svg>
);

export const ArrowLeft = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M13.5 8h-11M6.5 12.5 2 8l4.5-4.5" />
  </svg>
);

/** Diagonal, for anything that leaves the page. */
export const ArrowOut = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="1.8" y="3.3" width="12.4" height="9.4" />
    <path d="m1.8 4.6 6.2 4.2 6.2-4.2" />
  </svg>
);

export const Search = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="7" cy="7" r="4.4" />
    <path d="m10.4 10.4 3.2 3.2" />
  </svg>
);

export const Copy = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="5.3" y="5.3" width="8.4" height="8.4" />
    <path d="M10.7 2.3H2.3v8.4" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m2.8 8.4 3.6 3.6 6.8-8" />
  </svg>
);

export const Doc = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3.2 1.8h6l3.6 3.6v8.8H3.2z" />
    <path d="M9.2 1.8v3.6h3.6M5.6 8.4h4.8M5.6 11h3.2" />
  </svg>
);

/** A filled square rather than the usual outlined rosette. */
export const Award = ({ className }: P) => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
    <path d="M8 1.2 9.9 5l4.1.6-3 2.9.7 4.1L8 10.7 4.3 12.6l.7-4.1-3-2.9L6.1 5z" />
  </svg>
);

export const Sun = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="8" cy="8" r="3.1" />
    <path d="M8 .9v1.8M8 13.3v1.8M.9 8h1.8M13.3 8h1.8M3 3l1.3 1.3M11.7 11.7 13 13M13 3l-1.3 1.3M4.3 11.7 3 13" />
  </svg>
);

export const Moon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M13.4 9.6A5.9 5.9 0 0 1 6.4 2.6a5.9 5.9 0 1 0 7 7z" />
  </svg>
);

export const ArrowUp = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M8 13.5v-11M3.5 6.5 8 2l4.5 4.5" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M2 4.5h12M2 8h12M2 11.5h12" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m3.2 3.2 9.6 9.6M12.8 3.2l-9.6 9.6" />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M8 2.5v11M2.5 8h11" />
  </svg>
);

/** Four squares: the grid view. */
export const Grid = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M2.5 2.5h4.4v4.4H2.5zM9.1 2.5h4.4v4.4H9.1zM2.5 9.1h4.4v4.4H2.5zM9.1 9.1h4.4v4.4H9.1z" />
  </svg>
);

/** One full card and the edge of the next: the slide view. */
export const Slides = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M2.5 3h7.5v10H2.5zM12.6 3v10" />
  </svg>
);

export const Chain = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6.6 9.4 9.4 6.6M7.2 4.4l1-1a3.1 3.1 0 0 1 4.4 4.4l-1 1M8.8 11.6l-1 1a3.1 3.1 0 0 1-4.4-4.4l1-1" />
  </svg>
);
