import type { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/Container";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/home/story", label: "Story" },
  { href: "/home/gallery", label: "Gallery" },
  { href: "/home/guestbook", label: "Guestbook" },
];

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <header className="memorial-veil">
        <Container className="flex flex-col gap-6 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                In Loving Memory
              </p>
              <h1 className="font-serif text-3xl text-[#1e1c18] sm:text-4xl">
                Looney
              </h1>
            </div>
            <nav className="hidden flex-wrap gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4c3a] md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-full border border-[#2f4c3a]/20 bg-white/70 px-4 py-2 transition hover:border-[#2f4c3a] hover:bg-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>
      {children}
      <nav className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-[#2f4c3a]/20 bg-white/90 p-2 shadow-[0_12px_30px_rgba(47,76,58,0.18)] backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2f4c3a] sm:grid-cols-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="min-w-0 truncate rounded-xl border border-transparent px-2 py-2 leading-tight transition hover:border-[#2f4c3a]/20 hover:bg-[#f3ece2]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
