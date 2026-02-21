import Container from "@/components/Container";
import guestbookContent from "@/data/guestbook.json";

export default function GuestbookPage() {
  const { title, intro, tip, form } = guestbookContent;

  return (
    <main className="memorial-veil pb-16 pt-10">
      <Container className="flex flex-col gap-10">
        <section className="rounded-[32px] border border-black/5 bg-white/80 p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#1e1c18]">{title}</h2>
              <p className="text-base leading-relaxed text-[#5f564d]">
                {intro}
              </p>
              <p className="text-sm text-[#6f655a]">{tip}</p>
            </div>
            <form className="grid gap-4">
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none"
                placeholder={form.namePlaceholder}
                type="text"
              />
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none"
                placeholder={form.emailPlaceholder}
                type="email"
              />
              <textarea
                className="min-h-[140px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none"
                placeholder={form.messagePlaceholder}
              />
              <button
                className="rounded-full bg-[#2f4c3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#243a2d]"
                type="button"
              >
                {form.buttonLabel}
              </button>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}
