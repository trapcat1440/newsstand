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
    id: "Home",
    name: "The Excellent Place",
    tagline: "Avenue52 NY releasing the excellent place magazine strikes into architecture endavour with classy chairs and sofas..",
    description:
      "Avenue52 NY releasing the excellent place magazine strikes into architecture endavour with classy chairs and sofas..",
    category: "Home & Room",
    issue: "Issue NEW",
    priceInCents: 3599,
    image: "/covers/The Excellent Place ( Full print ) (3).pdf (17).jpeg",
    accent: "oklch(0.55 0.2 260)",
  },
  {
    id: "backstage",
    name: "Backstage",
    tagline: "True intentions in media",
    description:
      "Backstage gives you access to the most trusted nationwide casting notices in the industry and offers editorial benefits for the serious actors who invest in their careers..",
    category: "Hip-Hop & Lifestyle",
    issue: "Issue NEW",
    priceInCents: 4077,
    image: "/covers/Backstage Magazine-54091.jpeg",
    accent: "oklch(0.55 0.2 260)",
  },
  {
    id: "bake",
    name: "Bake From Scratch",
    tagline: "The world of baking",
    description:
      "Bake from Scratch is an artisan food and cooking magazine that celebrates the world of baking.",
    category: "Food & Cooking",
    issue: "Issue NEW",
    priceInCents: 11988,
    image: "/covers/Bake From Scratch-54064.jpeg",
    accent: "oklch(0.62 0.24 25)",
  },
  {
    id: "music",
    name: "Acoustic Guitar(Digital)",
    tagline: "Nowhere else can musicians find such comprehensive coverage of acoustic guitars",
    description:
      "Acoustic Guitar Magazine is the magazine for acoustic guitar enthusiasts, both professional and amateur.",
    category: "Music Books",
    issue: "Issue NEW",
    priceInCents: 5326,
    image: "/covers/Acoustic Guitar - Digital-63158.jpeg",
    accent: "oklch(0.75 0.16 85)",
  },
  {
    id: "Arts",
    name: "Dancing Magazone",
    tagline: "For over 80 years, dancers have turned to Dance Magazine for the most relevant, cutting edge and influential dance coverage",
    description:
      "Architecture and design that shapes the everyday, For over 80 years, dancers have turned to Dance Magazine for the most relevant, cutting edge and influential dance coverage.",
    category: "Arts & Dance",
    issue: "Issue NEW",
    priceInCents: 4077,
    image: "/covers/Dance Magazine-356.jpeg",
    accent: "oklch(0.5 0.02 240)",
  },
  {
    id: "Weather",
    name: "Firehouse",
    tagline: "Go further into the action of natural disasters",
    description:
      "Devoted to the fire service, its primary audience is America's paid and volunteer firefighters.",
    category: "Weather",
    issue: "Issue NEW",
    priceInCents: 11985,
    image: "/covers/Firehouse-44276.jpeg",
    accent: "oklch(0.55 0.15 155)",
  },
  {
    id: "Adult",
    name: "Fox (18+)",
    tagline: "Fox magazine is a premier adult publication for men",
    description:
      " Every issue features provocative pictures and articles for your entertainment. Featuring your favorite porn stars in various photos, you will love all the images and articles that each issue provides you with.",
    category: "Adult Media",
    issue: "Issue NEW",
    priceInCents: 7000,
    image: "/covers/Fox-3187.jpeg",
    accent: "oklch(0.6 0.22 350)",
  },
  {
    id: "Sports",
    name: "GOLF",
    tagline: "Golf Magazine is a sports magazine that provides everything golf enthusiasts need to improve their game",
    description:
      "Golf Magazine is a sports magazine that provides everything golf enthusiasts need to improve their game. Published since 1960, Golf Magazine is packed with how-to instruction, features, tournament coverage, reviews of new equipment, articles on travel and interviews with the pros",
    category: "Business & Finance",
    issue: "Issue NEW",
    priceInCents: 4500,
    image: "/covers/Golf-61.jpeg",
    accent: "oklch(0.5 0.13 160)",
  },
  {
    id: "Travel",
    name: "Hawaii",
    tagline: "Dreaming of palm trees and white sand beaches? Flower lei and aloha?",
    description:
      "Every issue of HAWAII Magazine is like a vacation in the Islands, showcasing the beauty of Hawaii, its people, its culture, its food and all of the places, activities and events you'll want to experience on your next visit.",
    category: "Travel",
    issue: "Issue NEW",
    priceInCents: 1599,
    image: "/covers/Hawaii-40201.jpeg",
    accent: "oklch(0.55 0.24 310)",
  },
]

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id)
}

export function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`
}
