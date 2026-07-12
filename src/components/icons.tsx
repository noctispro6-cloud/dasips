export function PropertyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="18" y="16" width="42" height="74" />
      <line x1="30" y1="30" x2="36" y2="30" />
      <line x1="42" y1="30" x2="48" y2="30" />
      <line x1="30" y1="46" x2="36" y2="46" />
      <line x1="42" y1="46" x2="48" y2="46" />
      <line x1="30" y1="62" x2="36" y2="62" />
      <line x1="42" y1="62" x2="48" y2="62" />
      <path d="M60 90 L60 50 L82 50 L82 90" />
      <line x1="68" y1="60" x2="74" y2="60" />
      <line x1="68" y1="70" x2="74" y2="70" />
    </svg>
  );
}

export function LandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M50 12 C 62 12 70 24 70 36 C 70 52 50 78 50 78 C 50 78 30 52 30 36 C 30 24 38 12 50 12 Z" />
      <circle cx="50" cy="36" r="10" />
      <path d="M16 90 L84 90" />
      <path d="M28 90 L28 80 L38 80 L38 90" />
      <path d="M62 90 L62 80 L72 80 L72 90" />
    </svg>
  );
}

export function RoadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M38 88 L46 14" />
      <path d="M62 88 L54 14" />
      <line x1="49.5" y1="26" x2="49" y2="38" strokeWidth="4.5" />
      <line x1="49" y1="48" x2="48.5" y2="60" strokeWidth="4.5" />
      <line x1="48" y1="70" x2="47.5" y2="82" strokeWidth="4.5" />
    </svg>
  );
}

export function DrainageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M50 14 C 38 32 30 44 30 56 C 30 71 39 82 50 82 C 61 82 70 71 70 56 C 70 44 62 32 50 14 Z" />
      <path d="M40 58 C 40 64 44 68 50 68" />
    </svg>
  );
}
