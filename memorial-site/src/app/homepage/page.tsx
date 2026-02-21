export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="memorial-veil mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 lg:gap-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#6f655a]">
              Dummy Content — Replace Details
            </span>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7aa37a]">
                In Loving Memory
              </p>
              <h1 className="font-serif text-4xl leading-tight text-[#1e1c18] sm:text-5xl lg:text-6xl">
                Looney
              </h1>
              <p className="text-lg text-[#6f655a]">
                March 4, 2012 — November 18, 2024
              </p>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[#5f564d] sm:text-lg">
              Luna was a warm patch of sunlight in every room — patient paws,
              curious eyes, and a tail that never forgot how to wag for her
              people. This page is a small home for her stories, her photos, and
              the love she left in all of us.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#2f4c3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#243a2d]"
                href="#guestbook"
              >
                Share a Memory
              </a>
              <a
                className="rounded-full border border-[#2f4c3a]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4c3a] transition hover:border-[#2f4c3a] hover:bg-white/70"
                href="#gallery"
              >
                View Photos
              </a>
            </div>
            <div className="grid gap-6 rounded-3xl border border-black/5 bg-white/70 p-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                  Years
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#1e1c18]">12</p>
                <p className="text-sm text-[#6f655a]">of loyal companionship</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                  Nicknames
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#1e1c18]">
                  Lulu, Bean
                </p>
                <p className="text-sm text-[#6f655a]">and Golden Girl</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                  Favorite Spot
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#1e1c18]">
                  The porch
                </p>
                <p className="text-sm text-[#6f655a]">where the breeze lived</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#f2d7c6]/60 blur-2xl" />
            <div className="absolute -right-10 top-24 h-40 w-40 rounded-full bg-[#7aa37a]/30 blur-3xl" />
            <div className="relative flex flex-col gap-6 rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_30px_80px_rgba(47,76,58,0.12)]">
              <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-[#f5c26b]/40 via-white to-[#f2d7c6]/60" />
              <div className="space-y-3">
                <h2 className="font-serif text-2xl text-[#1e1c18]">
                  A heart the size of a sky
                </h2>
                <p className="text-sm leading-relaxed text-[#6f655a]">
                  This space is for her happiest snapshots — morning walks,
                  golden hour naps, and the quiet days curled at your feet.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7aa37a]">
                  Add your favorite photos here
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-[#1e1c18]">Her Story</h2>
            <p className="text-base leading-relaxed text-[#5f564d]">
              Luna arrived in 2012 with big ears, bigger paws, and an immediate
              sense that the couch belonged to her. She grew into a steady
              presence — always by the door, always by your side, always ready
              for one more walk before dinner.
            </p>
            <p className="text-base leading-relaxed text-[#5f564d]">
              She loved soft blankets, toasted treats, and long afternoons in
              the yard when the sun slid across the grass. Her favorite game was
              “find the squeaky,” and her favorite people were whoever was
              standing closest to the snack drawer.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                year: "2012",
                title: "Homecoming",
                detail: "First day home, tiny paws and a giant personality.",
              },
              {
                year: "2015",
                title: "Adventure Era",
                detail:
                  "Road trips, lakes, and a fearless leap into every puddle.",
              },
              {
                year: "2018",
                title: "Neighborhood Favorite",
                detail:
                  "Daily walks became her social hour with every neighbor.",
              },
              {
                year: "2022",
                title: "Golden Calm",
                detail: "Slow mornings, softer steps, and the deepest cuddles.",
              },
            ].map((item) => (
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

        <section className="rounded-[32px] border border-black/5 bg-white/70 p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-[#1e1c18]">
                Favorite Things
              </h2>
              <p className="text-base leading-relaxed text-[#5f564d]">
                A quick list of the little joys that made her light up.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Pumpkin treats",
                  "The red squeaky ball",
                  "Car rides with the windows down",
                  "Sleeping under the desk",
                  "Watching birds on the porch",
                  "Stolen bites of toast",
                ].map((item) => (
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
              <h3 className="font-serif text-2xl text-[#1e1c18]">Her Legacy</h3>
              <p className="text-base leading-relaxed text-[#5f564d]">
                “We learned patience from her quiet wait at the door, joy from
                her morning spins, and gratitude from every gentle nudge.”
              </p>
              <div className="rounded-2xl border border-black/5 bg-[#f9f4ed] p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#7aa37a]">
                  Keepsake
                </p>
                <p className="mt-2 text-base text-[#5f564d]">
                  Add a scanned paw print, a favorite collar photo, or a note
                  from your vet here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-[#1e1c18]">Photo Moments</h2>
            <p className="max-w-sm text-sm text-[#6f655a]">
              Replace these placeholders with your favorite photos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
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
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "“She had a way of leaning into your hand that made the whole day softer.”",
              name: "Avery M.",
            },
            {
              quote:
                "“Luna always greeted us at the fence, like she’d been waiting all day.”",
              name: "The Park Crew",
            },
            {
              quote:
                "“Every sunset walk felt sacred with her trotting beside us.”",
              name: "Mom & Dad",
            },
          ].map((note) => (
            <div
              key={note.name}
              className="rounded-2xl border border-black/5 bg-white/80 p-6"
            >
              <p className="font-serif text-xl text-[#1e1c18]">{note.quote}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#7aa37a]">
                {note.name}
              </p>
            </div>
          ))}
        </section>

        <section
          id="guestbook"
          className="rounded-[32px] border border-black/5 bg-white/80 p-8 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#1e1c18]">Guestbook</h2>
              <p className="text-base leading-relaxed text-[#5f564d]">
                Leave a short memory, a favorite photo, or a simple note. This
                is where friends and family can keep her spirit close.
              </p>
              <p className="text-sm text-[#6f655a]">
                Tip: Connect this form to your preferred email or database
                later.
              </p>
            </div>
            <form className="grid gap-4">
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none"
                placeholder="Your name"
                type="text"
              />
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none"
                placeholder="Email (optional)"
                type="email"
              />
              <textarea
                className="min-h-[140px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none"
                placeholder="Share your memory..."
              />
              <button
                className="rounded-full bg-[#2f4c3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#243a2d]"
                type="button"
              >
                Send Tribute
              </button>
            </form>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-3 pb-6 text-center text-sm text-[#6f655a]">
          <p>Made with love for Looney.</p>
          <p>Replace names, dates, and memories to personalize.</p>
        </footer>
      </main>
    </div>
  );
}
