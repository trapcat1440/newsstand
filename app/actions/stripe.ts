
"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

const MAX_QUANTITY_PER_TITLE = 10

type CartInput = { id: string; quantity: number }[]

export async function startCheckoutSession(cart: CartInput) {
  if (!Array.isArray(cart) || cart.length === 0) {
    throw new Error("Your cart is empty.")
  }

  const lineItems = cart.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id)

    if (!product) {
      throw new Error(`Unknown product: "${item.id}"`)
    }

    // Validate quantity server-side: positive, integer, and capped.
    const quantity = Number(item.quantity)

    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error(`Invalid quantity for ${product.name}.`)
    }

    if (quantity > MAX_QUANTITY_PER_TITLE) {
      throw new Error(
        `You can order at most ${MAX_QUANTITY_PER_TITLE} copies of ${product.name}.`,
      )
    }

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: `${product.name} — ${product.issue}`,
          description: product.description,
        },
        // Price comes from the server catalog, never the client.
        unit_amount: product.priceInCents,
      },
      quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded_page",
    redirect_on_completion: "never",
    line_items: lineItems,
    mode: "payment",

    // Collect the customer's name and create a Stripe Customer.
    customer_creation: "always",

    // Require billing address.
    billing_address_collection: "required",

    // Require shipping address in the United States.
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
  })

  return session.client_secret
}

