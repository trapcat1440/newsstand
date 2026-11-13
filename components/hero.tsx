
"use client"

import { PRODUCTS } from "@/lib/products"

export function Hero() {
  const marquee = [...PRODUCTS, ...PRODUCTS]
  const featured = PRODUCTS.slice(0, 3)

  return (
    <section
      id="top"
      className="overflow-hidden border-b-2 border-foreground"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT: EDITORIAL CONTENT */}
        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            <span className="inline-block size-2 bg-primary" />
            Grab the release of a lifetime
          </p>

          <h1 className="text-balance font-display text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            The best independent{" "}
            <span className="text-primary">magazines</span>, on one stand.
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Major independent titles across tech, news, food, design,
            travel, art, business, and music. Buy single issues.
            No subscription, no clutter — just great print, delivered.
          </p>

          <div className="mt-6">
            <a
              href="https://www.jdoqocy.com/click-101756007-11921710"
              target="_top"
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
            >
              Our Partners
              <img
                src="https://www.tqlkg.com/image-101756007-11921710"
                width="120"
                height="60"
                alt="Our partners"
              />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#titles"
              className="border-2 border-foreground bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest text-background shadow-[0_6px_0_#888] transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_9px_0_#888] active:translate-y-1 active:shadow-none"
            >
              Shop available titles
            </a>

            <a
              href="#about"
              className="border-2 border-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest shadow-[0_5px_0_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground active:translate-y-1 active:shadow-none"
            >
              How it works
            </a>
          </div>
        </div>

        {/* RIGHT: 3D MAGAZINE DISPLAY */}
        <div className="relative mx-auto flex min-h-[380px] w-full max-w-[550px] items-center justify-center sm:min-h-[480px]">

          {/* Background decorative circle */}
          <div className="absolute size-[300px] rounded-full border border-foreground/10 bg-primary/10 blur-[1px] sm:size-[400px]" />

          <div className="absolute right-8 top-8 z-0 rotate-12 text-7xl font-black uppercase tracking-tighter text-foreground/[0.06] sm:text-9xl">
            PRINT
          </div>

          {/* Magazine 1 */}
          {featured[0] && (
            <div className="magazine-card absolute left-[5%] top-[18%] z-10 w-[42%] max-w-[190px] -rotate-[12deg] transition-all duration-500 hover:z-40 hover:rotate-0 hover:scale-110">
              <div className="relative aspect-[3/4] overflow-hidden border border-white/20 bg-[#d9a35f] p-4 shadow-[15px_20px_25px_rgba(0,0,0,0.3)] sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/70">
                  Independent Press
                </span>
                <h3 className="mt-8 break-words font-display text-3xl uppercase leading-[0.85] text-black sm:text-4xl">
                  {featured[0].name}
                </h3>
                <div className="absolute bottom-4 left-4 right-4 border-t border-black/40 pt-2 text-[9px] font-bold uppercase tracking-widest text-black">
                  THE LATEST ISSUE
                </div>
              </div>
            </div>
          )}

          {/* Magazine 2 */}
          {featured[1] && (
            <div className="magazine-card absolute right-[5%] top-[12%] z-20 w-[42%] max-w-[190px] rotate-[12deg] transition-all duration-500 hover:z-40 hover:rotate-0 hover:scale-110">
              <div className="relative aspect-[3/4] overflow-hidden border border-white/20 bg-[#c75b45] p-4 shadow-[15px_20px_25px_rgba(0,0,0,0.35)] sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                  Culture & Ideas
                </span>
                <h3 className="mt-8 break-words font-display text-3xl uppercase leading-[0.85] text-white sm:text-4xl">
                  {featured[1].name}
                </h3>
                <div className="absolute bottom-4 left-4 right-4 border-t border-white/50 pt-2 text-[9px] font-bold uppercase tracking-widest text-white">
                  CULTURE / DESIGN / LIFE
                </div>
              </div>
            </div>
          )}

          {/* Magazine 3 */}
          {featured[2] && (
            <div className="magazine-card absolute bottom-[5%] left-[30%] z-30 w-[43%] max-w-[200px] rotate-[3deg] transition-all duration-500 hover:z-40 hover:rotate-0 hover:scale-110">
              <div className="relative aspect-[3/4] overflow-hidden border border-white/20 bg-[#d5d0b9] p-4 shadow-[15px_20px_30px_rgba(0,0,0,0.4)] sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/70">
                  The Print Collection
                </span>
                <h3 className="mt-8 break-words font-display text-3xl uppercase leading-[0.85] text-black sm:text-4xl">
                  {featured[2].name}
                </h3>
                <div className="absolute bottom-4 left-4 right-4 border-t border-black/40 pt-2 text-[9px] font-bold uppercase tracking-widest text-black">
                  DISCOVER SOMETHING NEW
                </div>
              </div>
            </div>
          )}

          {/* Decorative star */}
          <div className="absolute bottom-5 right-5 z-40 animate-pulse text-5xl text-primary sm:text-6xl">
            ✳
          </div>

          <div className="absolute bottom-0 left-0 z-40 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            INDEPENDENT. ORIGINAL. PRINT.
          </div>
        </div>
      </div>

      {/* MOVING MAGAZINE MARQUEE */}
      <div className="overflow-hidden border-t-2 border-foreground bg-primary text-primary-foreground">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-8 py-3">
          {marquee.map((p, i) => (
            <span
              key={`${p.id}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap font-display text-xl uppercase tracking-wide"
            >
              {p.name}
              <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

