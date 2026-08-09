"use client"

import { Plus } from "lucide-react"
import { formatPrice, type Product } from "@/lib/products"
import { useCart } from "@/components/cart-context"

export function MagazineCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const { add } = useCart()

  return (
    <article className="group flex flex-col border-b-2 border-r-2 border-foreground">
      <div className="relative overflow-hidden bg-muted">
        <div
          className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-3 py-2 text-[0.7rem] font-bold uppercase tracking-widest text-background mix-blend-difference"
          aria-hidden="true"
        >
          <span>{product.category}</span>
          <span>{product.issue}</span>
        </div>
        <img
          src={product.image || "/placeholder.svg"}
          alt={`Cover of ${product.name}, ${product.issue}`}
          loading={index < 4 ? "eager" : "lazy"}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-4xl uppercase leading-none tracking-tight">
            {product.name}
          </h3>
          <span className="shrink-0 font-display text-2xl leading-none text-primary">
            {formatPrice(product.priceInCents)}
          </span>
        </div>

        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {product.tagline}
        </p>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <button
          type="button"
          onClick={() => add(product.id)}
          className="mt-auto flex items-center justify-center gap-2 border-2 border-foreground bg-background px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Plus className="size-4" strokeWidth={3} />
          Add to bag
        </button>
      </div>
    </article>
  )
}
