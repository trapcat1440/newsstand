
"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { PRODUCTS, formatPrice } from "@/lib/products"

type Props = {
  onAddToCart: (product: (typeof PRODUCTS)[number]) => void
}

export function MagazineSearch({ onAddToCart }: Props) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const categories = [
    "All",
    ...new Set(PRODUCTS.map((p) => p.category)),
  ]

  const results = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const term = search.toLowerCase()

      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.tagline.toLowerCase().includes(term)

      const matchesCategory =
        category === "All" || product.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <section id="titles" className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">

      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
          The Magazine Collection
        </p>

        <h2 className="mt-4 font-display text-5xl uppercase leading-none md:text-7xl">
          Find your next <span className="text-primary">read.</span>
        </h2>

        <p className="mt-4 max-w-xl text-muted-foreground">
          Search hundreds of independent titles and discover
          something worth reading.
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex items-center border-2 border-foreground bg-background shadow-[6px_6px_0_#888]">
        <span className="px-4 text-xl">⌕</span>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search magazines, topics, categories..."
          className="min-w-0 flex-1 bg-transparent px-3 py-5 outline-none"
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="px-4 text-xs font-bold uppercase"
          >
            Clear
          </button>
        )}
      </div>

      {/* CATEGORY FILTERS */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`border-2 border-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              category === item
                ? "bg-foreground text-background shadow-[3px_3px_0_var(--primary)]"
                : "hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* RESULTS */}
      <div className="mb-6 mt-10 flex justify-between">
        <p className="text-sm font-bold uppercase tracking-widest">
          {results.length} Titles Found
        </p>
        <p className="text-xs text-muted-foreground">
          SINGLE ISSUES AVAILABLE
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">

        {results.map((product) => (
          <article
            key={product.id}
            className="group"
          >
            {/* 3D COVER */}
            <div className="magazine-search-card relative mx-auto aspect-[3/4] w-full max-w-[280px] transition-all duration-500">

              <div
                className="relative h-full w-full overflow-hidden border border-black/10 bg-neutral-200 shadow-[12px_15px_20px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-y-6 group-hover:shadow-[20px_25px_25px_rgba(0,0,0,0.3)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />

                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    {product.issue}
                  </p>
                </div>
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                {product.category}
              </p>

              <h3 className="mt-1 font-display text-xl uppercase">
                {product.name}
              </h3>

              <p className="mt-2 text-sm font-bold">
                {formatPrice(product.priceInCents)}
              </p>

              <button
                onClick={() => onAddToCart(product)}
                className="mt-4 w-full border-2 border-foreground bg-foreground px-3 py-3 text-xs font-bold uppercase tracking-widest text-background shadow-[0_4px_0_#888] transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground active:translate-y-1 active:shadow-none"
              >
                Add to bag +
              </button>
            </div>
          </article>
        ))}

      </div>

      {results.length === 0 && (
        <div className="py-20 text-center">
          <h3 className="font-display text-3xl uppercase">
            No titles found.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Try searching for another magazine.
          </p>
        </div>
      )}
    </section>
  )
}
