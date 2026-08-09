"use client"

import { CartProvider } from "@/components/cart-context"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MagazineGrid } from "@/components/magazine-grid"
import { CartDrawer } from "@/components/cart-drawer"

const STEPS = [
  {
    n: "01",
    title: "Pick your issues",
    body: "Browse the stand and drop single issues into your bag. No subscription, no commitment.",
  },
  {
    n: "02",
    title: "Checkout securely",
    body: "Pay in a few taps with Stripe. Your card details never touch our servers.",
  },
  {
    n: "03",
    title: "Read the good stuff",
    body: "We print and ship your issues fast, straight to your door in recyclable packaging.",
  },
]

export function Store() {
  return (
    <CartProvider>
      <SiteHeader />
      <main>
        <Hero />
        <div className="py-14 md:py-20">
          <MagazineGrid />
        </div>

        <section
          id="about"
          className="border-y-2 border-foreground bg-foreground text-background"
        >
          <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6 md:py-20">
            <h2 className="max-w-3xl text-balance font-display text-4xl uppercase leading-none tracking-tight md:text-6xl">
              A newsstand that backs independent print.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-px border-2 border-background bg-background md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.n} className="bg-foreground p-6">
                  <span className="font-display text-5xl leading-none text-primary">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/70">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-foreground">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
          <span className="font-display text-3xl uppercase leading-none tracking-tight">
            Newsstand
          </span>
          <p className="text-sm text-muted-foreground">
            Independent magazines, delivered. Built as a demo store — payments
            run on Stripe test mode.
          </p>
        </div>
      </footer>

      <CartDrawer />
    </CartProvider>
  )
}
