const ICONS: Record<string, React.ReactNode> = {
  "Kids I": (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.25" fill="currentColor" stroke="none" />
    </>
  ),
  "Kids II": (
    <>
      <circle cx="9" cy="9.5" r="5" />
      <circle cx="15" cy="14.5" r="5" />
    </>
  ),
  Infantil: <path d="M12 3l7 3.2v5.3c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6.2L12 3z" />,
  Juvenil: (
    <>
      <path d="M4.5 15.5L12 8l7.5 7.5" />
      <path d="M4.5 9.5L12 2l7.5 7.5" opacity="0.45" />
    </>
  ),
  Adultos: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M4.5 20.5c0-4.1 3.4-6.8 7.5-6.8s7.5 2.7 7.5 6.8" />
    </>
  ),
  "Alto rendimento": (
    <path d="M12 2.5c1.8 2.6 4.5 4.8 4.5 8.3a4.5 4.5 0 01-9 0c0-1.3.4-2.3 1.1-3.3.2 1 .8 1.7 1.5 1.9-.5-2.1.4-4.6 1.9-6.9z" />
  ),
};

export default function ProgramIcon({ tag }: { tag: string }) {
  return (
    <svg
      className="prog-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[tag] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
