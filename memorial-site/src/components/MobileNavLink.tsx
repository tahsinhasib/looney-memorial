"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavLinkProps = {
  href: string;
  label: string;
  variant?: "mobile" | "desktop";
};

export default function MobileNavLink({
  href,
  label,
  variant = "mobile",
}: MobileNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const mobileClasses = isActive
    ? "border border-[#2f4c3a]/40 bg-[#f3ece2] text-[#1f3528]"
    : "border border-transparent hover:border-[#2f4c3a]/20 hover:bg-[#f3ece2]";
  const desktopClasses = isActive
    ? "border-[#2f4c3a]/40 bg-[#f3ece2] text-[#1f3528]"
    : "border-[#2f4c3a]/20 bg-white/70 hover:border-[#2f4c3a] hover:bg-white";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`min-w-0 truncate rounded-xl border px-2 py-2 leading-tight transition ${
        variant === "desktop" ? desktopClasses : mobileClasses
      }`}
    >
      {label}
    </Link>
  );
}
