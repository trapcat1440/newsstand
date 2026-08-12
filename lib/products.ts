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
    id: "Girl",
    name: "Girl's Life",
    tagline: "The perfect magazine for girls 10 and up. Friends, advice, quizzes, fashion, ideas, celebs, self-esteem. Five-time Parents Choice Award winner!",
    description:
      "The perfect magazine for girls 10 and up. Friends, advice, quizzes, fashion, ideas, celebs, self-esteem. Five-time Parents Choice Award winner!..",
    category: "Hip-Hop & Lifestyle",
    issue: "Issue NEW",
    priceInCents: 6999,
    image: "/covers/Girls Life-4404.jpeg",
    accent: "oklch(0.55 0.2 260)",
  },
  {
    id: "Wellness",
    name: "New Hampshire",
    tagline: "Devoted to all aspects of life in New Hampshire with a special emphasis on issues, events, people, dining out, home & garden and travel.",
    description:
      "Devoted to all aspects of life in New Hampshire with a special emphasis on issues, events, people, dining out, home & garden and travel..",
    category: "Wellness",
    issue: "Issue NEW",
    priceInCents: 2199,
    image: "/covers/New Hampshire Magazine-45273.jpeg",
    accent: "oklch(0.62 0.24 25)",
  },
  {
    id: "Cooking",
    name: "Art Culionare",
    tagline: "We're the food magazine that chefs and food enthusiasts turn to for inspiration. In each issue we go on-location and encapsulate a chef's journey with stunning full-page, large-format photos that pay homage to one-of-a-kind recipes. Each issue comes hardbound with gorgeous glossy pages, a point of reference and keepsake",
    description:
      "We're the food magazine that chefs and food enthusiasts turn to for inspiration. In each issue we go on-location and encapsulate a chef's journey with stunning full-page, large-format photos that pay homage to one-of-a-kind recipes. Each issue comes hardbound with gorgeous glossy pages, a point of reference and keepsake.",
    category: "Music Books",
    issue: "Issue NEW",
    priceInCents: 6199,
    image: "/covers/Art Culinaire-51441.jpeg",
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
