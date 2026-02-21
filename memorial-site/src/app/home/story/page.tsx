import Container from "@/components/Container";
import storyContent from "@/data/story.json";

export default function StoryPage() {
  const { title, paragraphs, timeline } = storyContent;

  return (
    <main className="memorial-veil pb-16 pt-10">
      <Container className="flex flex-col gap-12">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-[#1e1c18]">{title}</h2>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-[#5f564d]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                  {item.year}
                </p>
                <h3 className="mt-3 font-serif text-xl text-[#1e1c18]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#6f655a]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
