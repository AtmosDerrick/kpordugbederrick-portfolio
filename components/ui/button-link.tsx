import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  download = false,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center border text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50";

  const styles =
    variant === "primary"
      ? "border-stone-900 bg-stone-900 text-stone-50 hover:bg-stone-800"
      : "border-stone-300 bg-transparent text-stone-900 hover:border-stone-900 hover:bg-stone-100";

  return (
    <a
      href={href}
      download={download ? true : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
