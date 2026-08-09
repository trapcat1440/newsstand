export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  issue: string
  priceInCents: number
  image: string
  accent: string
}

// Source of truth for the newsstand. All product UI reads from this array,
// and the checkout session validates the price server-side by looking up
// the product id here — the client can never set its own price.
export const PRODUCTS: Product[] = [
  {
    id: "orbit",
    name: "Orbit",
    tagline: "The future, decoded",
    description:
      "Deep reporting on AI, robotics, space, and the technology reshaping how we live and work.",
    category: "Tech & Future",
    issue: "Issue 42",
    priceInCents: 1699,
    image: "/covers/orbit.png",
    accent: "oklch(0.55 0.2 260)",
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "The world, in focus",
    description:
      "Independent world news and current affairs, told through long-form journalism and documentary photography.",
    category: "News & Affairs",
    issue: "Issue 118",
    priceInCents: 1499,
    image: "/covers/pulse.png",
    accent: "oklch(0.62 0.24 25)",
  },
  {
    id: "grain",
    name: "Grain",
    tagline: "Food is culture",
    description:
      "Recipes, farmers, and the stories behind what we eat — a seasonal celebration of the table.",
    category: "Food & Culture",
    issue: "Issue 27",
    priceInCents: 1599,
    image: "/covers/grain.png",
    accent: "oklch(0.75 0.16 85)",
  },
  {
    id: "vantage",
    name: "Vantage",
    tagline: "How we build",
    description:
      "Architecture and design that shapes the everyday, from brutalist icons to the quiet radical home.",
    category: "Design & Architecture",
    issue: "Issue 09",
    priceInCents: 1899,
    image: "/covers/vantage.png",
    accent: "oklch(0.5 0.02 240)",
  },
  {
    id: "terra",
    name: "Terra",
    tagline: "Go further",
    description:
      "Travel and the outdoors for the endlessly curious — trails, cities, and the wild places between.",
    category: "Travel & Outdoors",
    issue: "Issue 55",
    priceInCents: 1599,
    image: "/covers/terra.png",
    accent: "oklch(0.55 0.15 155)",
  },
  {
    id: "frame",
    name: "Frame",
    tagline: "Look closer",
    description:
      "A gallery between covers — contemporary art, photography, and the makers pushing the medium forward.",
    category: "Art & Photography",
    issue: "Issue 14",
    priceInCents: 1799,
    image: "/covers/frame.png",
    accent: "oklch(0.6 0.22 350)",
  },
  {
    id: "current",
    name: "Current",
    tagline: "The business of now",
    description:
      "Markets, founders, and the forces moving money — clear-eyed reporting on the modern economy.",
    category: "Business & Finance",
    issue: "Issue 71",
    priceInCents: 1699,
    image: "/covers/current.png",
    accent: "oklch(0.5 0.13 160)",
  },
  {
    id: "noise",
    name: "Noise",
    tagline: "Turn it up",
    description:
      "Music and youth culture, loud and unfiltered — the artists, scenes, and sounds defining the moment.",
    category: "Music & Culture",
    issue: "Issue 33",
    priceInCents: 1499,
    image: "/covers/noise.png",
    accent: "oklch(0.55 0.24 310)",
  },
]

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id)
}

export function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`
}
