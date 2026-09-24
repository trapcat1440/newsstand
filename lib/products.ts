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
    id: "National WildLife",
    name: "National Wildlife",
    tagline: "National wildlife is the magazine for wild life and nature scenes. More and more the nature scenes show wildlife.",
    description:
      "National wildlife is the magazine for wild life and nature scenes. More and more the nature scenes show wildlife.",
    category: "Nature & Animal",
    issue: "Issue NEW",
    priceInCents: 5799,
    image: "/covers/National Wildlife-5861.jpeg",
    accent: "oklch(0.55 0.2 260)",
  },
  {
    id: "TIME",
    name: "TIME",
    tagline: "TIME is an award-winning American news magazine that reports on politics, health, business, technology, science, entertainment, and world news. Founded in 1923, TIME is a leader in the publishing industry and has been a trusted news publication since its inception. As an authoritative periodical, TIME covers a wide range of U.S. and world news topics",
    description:
      "TIME is an award-winning American news magazine that reports on politics, health, business, technology, science, entertainment, and world news. Founded in 1923, TIME is a leader in the publishing industry and has been a trusted news publication since its inception. As an authoritative periodical, TIME covers a wide range of U.S. and world news topics",
    category: "Wellness",
    issue: "Issue NEW",
    priceInCents: 9099,
    image: "/covers/Time-1006.jpeg",
    accent: "oklch(0.62 0.24 25)",
  },
  {
    id: "Smithsonian",
    name: "SMITHSONIAN",
    tagline: "This magazine chronicles the arts, environment, sciences and popular culture of the times. It is edited for modern, well-rounded individuals with diverse, general interest..",
    description:
      "We're the food magazine that chefs and food enthusiasts turn to for inspiration. In each issue we go on-location and encapsulate a chef's journey with stunning full-page, large-format photos that pay homage to one-of-a-kind recipes. Each issue comes hardbound with gorgeous glossy pages, a point of reference and keepsake.",
    category: "Daily Life",
    issue: "Issue NEW",
    priceInCents: 6199,
    image: "/covers/Smithsonian-195.jpeg",
    accent: "oklch(0.75 0.16 85)",
  },
  {
    id: "Arts",
    name: "Dancing Magazine",
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
    id: "Mad Magazine",
    name: "MAD Magazine",
    tagline: "MAD Magazine has been America’s longest-running humor magazine with a never-ending quest to poke fun at everything pop culture — from movies and music to parents and politics!",
    description:
      "MAD Magazine has been America’s longest-running humor magazine with a never-ending quest to poke fun at everything pop culture — from movies and music to parents and politics!",
    category: "Weather",
    issue: "Issue NEW",
    priceInCents: 7295,
    image: "/covers/MAD Magazine-5583.jpeg",
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
    name: "Motor Trend",
    tagline: "This is a contemporary world car magazine which provides evaluations of automotive products for all varieties and styles of cars.",
    description:
      "This is a contemporary world car magazine which provides evaluations of automotive products for all varieties and styles of cars.",
    category: "Sports",
    issue: "Issue NEW",
    priceInCents: 4500,
    image: "/covers/Motor Trend-88.jpeg",
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
