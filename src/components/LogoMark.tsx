type LogoMarkProps = {
  className?: string;
};

export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M62 16A30 30 0 1 0 62 64"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M25 31L16 40L25 49"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M55 31L64 40L55 49"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M28 51L39 39L47 45L58 31"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="51" r="2.8" fill="var(--logo-accent)" />
      <circle cx="39" cy="39" r="2.8" fill="var(--logo-accent)" />
      <circle cx="47" cy="45" r="2.8" fill="var(--logo-accent)" />
      <circle cx="58" cy="31" r="2.8" fill="var(--logo-accent)" />
    </svg>
  );
}
