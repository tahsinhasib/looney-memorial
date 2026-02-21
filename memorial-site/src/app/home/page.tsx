import Image from "next/image";
import Container from "@/components/Container";
import homeContent from "@/data/home.json";

export default function HomePage() {
  const { badge, eyebrow, name, dates, intro, cta, stats, portrait, favorites, legacy, footer } =
    homeContent;

  return (
    <main className="memorial-veil pb-16 pt-10">
      <Container className="flex flex-col gap-16 lg:gap-20">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#6f655a]">
            {badge}
          </span>
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7aa37a]">
              {eyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#1e1c18] sm:text-5xl lg:text-6xl">
              {name}
            </h2>
            <p className="text-lg text-[#6f655a]">
              {dates}
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#5f564d] sm:text-lg">
            {intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[#2f4c3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#243a2d]"
              href={cta.primaryHref}
            >
              {cta.primary}
            </a>
            <a
              className="rounded-full border border-[#2f4c3a]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4c3a] transition hover:border-[#2f4c3a] hover:bg-white/70"
              href={cta.secondaryHref}
            >
              {cta.secondary}
            </a>
          </div>
          <div className="grid gap-6 rounded-3xl border border-black/5 bg-white/70 p-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#1e1c18]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#6f655a]">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#f2d7c6]/60 blur-2xl" />
          <div className="absolute -right-10 top-24 h-40 w-40 rounded-full bg-[#7aa37a]/30 blur-3xl" />
          <div className="relative flex flex-col gap-6 rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_30px_80px_rgba(47,76,58,0.12)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/home_1.jpg"
                alt="Looney portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-[#1e1c18]">
                {portrait.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6f655a]">
                {portrait.body}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                {portrait.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-black/5 bg-white/70 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-[#1e1c18]">
              {favorites.title}
            </h3>
            <p className="text-base leading-relaxed text-[#5f564d]">
              {favorites.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {favorites.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#2f4c3a]/20 bg-[#f2d7c6]/40 px-4 py-2 text-sm font-medium text-[#2f4c3a]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="font-serif text-2xl text-[#1e1c18]">
              {legacy.title}
            </h4>
            <p className="text-base leading-relaxed text-[#5f564d]">
              {legacy.quote}
            </p>
            <div className="rounded-2xl border border-black/5 bg-[#f9f4ed] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7aa37a]">
                {legacy.keepsakeTitle}
              </p>
              <p className="mt-2 text-base text-[#5f564d]">
                {legacy.keepsakeBody}
              </p>
            </div>
          </div>
        </div>
      </section>

        <footer className="flex flex-col items-center gap-3 pb-6 text-center text-sm text-[#6f655a]">
          <p>{footer.primary}</p>
          <p>{footer.secondary}</p>
        </footer>
      </Container>
    </main>
  );
}
