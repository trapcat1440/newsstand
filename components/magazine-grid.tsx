"use client"

import { PRODUCTS } from "@/lib/products"
import { MagazineCard } from "@/components/magazine-card"

export function MagazineGrid() {
  return (
    <section id="titles" className="mx-auto max-w-[1400px] px-4 md:px-6">
      <div className="flex items-end justify-between gap-4 border-b-2 border-foreground py-6">
        <h2 className="font-display text-4xl uppercase leading-none tracking-tight md:text-5xl">
          On the stand
        </h2>
        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          {PRODUCTS.length} titles
        </span>
      </div>

      <div className="grid grid-cols-1 border-l-2 border-t-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <MagazineCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
