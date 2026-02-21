import Container from "@/components/Container";
import galleryContent from "@/data/gallery.json";

export default function GalleryPage() {
  const { title, subtitle, count } = galleryContent;

  return (
    <main className="memorial-veil pb-16 pt-10">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-[#1e1c18]">{title}</h2>
          <p className="max-w-sm text-sm text-[#6f655a]">{subtitle}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={`photo-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white via-[#f2d7c6]/50 to-[#f5c26b]/40"
            >
              <div className="absolute bottom-3 left-3 rounded-full bg-white/70 px-3 py-1 text-xs text-[#6f655a]">
                Photo {index + 1}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
