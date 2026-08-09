"use client"

import { useEffect, useMemo, useState } from "react"
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react"
import { formatPrice } from "@/lib/products"
import { useCart } from "@/components/cart-context"
import Checkout, { type CartItem } from "@/components/checkout"

export function CartDrawer() {
  const { isOpen, close, lines, count, totalInCents, setQuantity, remove } =
    useCart()
  const [checkingOut, setCheckingOut] = useState(false)

  // Freeze the cart snapshot passed to Stripe so the embedded checkout's
  // client-secret fetch isn't torn down when quantities change mid-session.
  const [frozenCart, setFrozenCart] = useState<CartItem[]>([])

  useEffect(() => {
    if (!isOpen) setCheckingOut(false)
  }, [isOpen])

  useEffect(() => {
    if (checkingOut) return
    if (count === 0) setCheckingOut(false)
  }, [count, checkingOut])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const startCheckout = () => {
    setFrozenCart(
      lines.map((l) => ({ id: l.product.id, quantity: l.quantity })),
    )
    setCheckingOut(true)
  }

  const title = useMemo(() => {
    if (checkingOut) return "Checkout"
    return count > 0 ? `Your bag (${count})` : "Your bag"
  }, [checkingOut, count])

  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-50 bg-foreground/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!isOpen}
        aria-label="Shopping bag"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l-2 border-foreground bg-background transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-4">
          <div className="flex items-center gap-3">
            {checkingOut && (
              <button
                type="button"
                onClick={() => setCheckingOut(false)}
                className="flex items-center justify-center border-2 border-foreground p-1.5 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Back to bag"
              >
                <ArrowLeft className="size-4" strokeWidth={2.5} />
              </button>
            )}
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex items-center justify-center border-2 border-foreground p-1.5 transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Close bag"
          >
            <X className="size-4" strokeWidth={2.5} />
          </button>
        </div>

        {checkingOut ? (
          <div className="flex-1 overflow-y-auto p-4">
            <Checkout cart={frozenCart} />
          </div>
        ) : count === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag className="size-10 text-muted-foreground" strokeWidth={1.5} />
            <p className="font-display text-2xl uppercase tracking-tight">
              Your bag is empty
            </p>
            <p className="text-sm text-muted-foreground">
              Add a title from the stand to get started.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-2 border-2 border-foreground px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Browse titles
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y-2 divide-foreground overflow-y-auto">
              {lines.map((line) => (
                <li key={line.product.id} className="flex gap-3 p-4">
                  <img
                    src={line.product.image || "/placeholder.svg"}
                    alt=""
                    className="h-24 w-[4.5rem] shrink-0 border-2 border-foreground object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl uppercase leading-none tracking-tight">
                          {line.product.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {line.product.issue}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.product.id)}
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground underline underline-offset-2 hover:text-primary"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border-2 border-foreground">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(line.product.id, line.quantity - 1)
                          }
                          className="flex items-center justify-center p-1.5 transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label={`Decrease quantity of ${line.product.name}`}
                        >
                          <Minus className="size-3.5" strokeWidth={3} />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold tabular-nums">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(line.product.id, line.quantity + 1)
                          }
                          className="flex items-center justify-center p-1.5 transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label={`Increase quantity of ${line.product.name}`}
                        >
                          <Plus className="size-3.5" strokeWidth={3} />
                        </button>
                      </div>
                      <span className="font-display text-lg leading-none">
                        {formatPrice(line.product.priceInCents * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t-2 border-foreground p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="font-display text-3xl leading-none">
                  {formatPrice(totalInCents)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Taxes and shipping calculated at checkout.
              </p>
              <button
                type="button"
                onClick={startCheckout}
                className="mt-4 w-full border-2 border-foreground bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
