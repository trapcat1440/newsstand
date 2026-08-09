"use client"

import { PRODUCTS } from "@/lib/products"

export function Hero() {
  const marquee = [...PRODUCTS, ...PRODUCTS]

  return (
    <section id="top" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6 md:py-20">
        <p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          <span className="inline-block size-2 bg-primary" aria-hidden="true" />
          Fresh issues, every week
        </p>
        <h1 className="text-balance font-display text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          The best independent{" "}
          <span className="text-primary">magazines</span>, on one stand.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Eight fiercely independent titles across tech, news, food, design,
          travel, art, business, and music. Buy single issues. No subscription,
          no clutter — just great print, delivered.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#titles"
            className="border-2 border-foreground bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Shop all titles
          </a>
          <a
            href="#about"
            className="border-2 border-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            How it works
          </a>
        </div>
      </div>

      <div className="overflow-hidden border-t-2 border-foreground bg-primary text-primary-foreground">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-8 py-3">
          {marquee.map((p, i) => (
            <span
              key={`${p.id}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap font-display text-xl uppercase tracking-wide"
            >
              {p.name}
              <span className="text-base" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
