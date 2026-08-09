"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-context"

export function SiteHeader() {
  const { count, open } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl uppercase leading-none tracking-tight md:text-3xl">
            Agency Reading©
          </span>
          <span
            className="hidden size-2 bg-primary md:block"
            aria-hidden="true"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-widest md:flex">
          <a href="#titles" className="hover:text-primary">
            Inventory
          </a>
          <a href="#about" className="hover:text-primary">
            About
          </a>
        </nav>

        <button
          type="button"
          onClick={open}
          className="flex items-center gap-2 border-2 border-foreground bg-foreground px-3 py-2 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Open bag, ${count} item${count === 1 ? "" : "s"}`}
        >
          <ShoppingBag className="size-4" strokeWidth={2.5} />
          <span>Bag</span>
          <span className="flex min-w-6 items-center justify-center bg-primary px-1.5 text-primary-foreground tabular-nums">
            {count}
          </span>
        </button>
      </div>
    </header>
  )
}
