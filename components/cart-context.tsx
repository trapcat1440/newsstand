"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { PRODUCTS, type Product } from "@/lib/products"

export type CartLine = { product: Product; quantity: number }

const MAX_PER_TITLE = 10

type CartContextValue = {
  lines: CartLine[]
  count: number
  totalInCents: number
  isOpen: boolean
  add: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  remove: (id: string) => void
  clear: () => void
  open: () => void
  close: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [isOpen, setIsOpen] = useState(false)

  const add = useCallback((id: string) => {
    setQuantities((q) => {
      const next = Math.min((q[id] ?? 0) + 1, MAX_PER_TITLE)
      return { ...q, [id]: next }
    })
    setIsOpen(true)
  }, [])

  const setQuantity = useCallback((id: string, quantity: number) => {
    setQuantities((q) => {
      if (quantity <= 0) {
        const { [id]: _removed, ...rest } = q
        return rest
      }
      return { ...q, [id]: Math.min(quantity, MAX_PER_TITLE) }
    })
  }, [])

  const remove = useCallback((id: string) => {
    setQuantities((q) => {
      const { [id]: _removed, ...rest } = q
      return rest
    })
  }, [])

  const clear = useCallback(() => setQuantities({}), [])

  const lines = useMemo<CartLine[]>(() => {
    return Object.entries(quantities)
      .map(([id, quantity]) => {
        const product = PRODUCTS.find((p) => p.id === id)
        return product ? { product, quantity } : null
      })
      .filter((l): l is CartLine => l !== null)
  }, [quantities])

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  )

  const totalInCents = useMemo(
    () => lines.reduce((sum, l) => sum + l.product.priceInCents * l.quantity, 0),
    [lines],
  )

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count,
      totalInCents,
      isOpen,
      add,
      setQuantity,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [lines, count, totalInCents, isOpen, add, setQuantity, remove, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
