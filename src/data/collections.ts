export interface Collection {
  slug: string;
  name: string;
  description?: string;
  image: string;
  count: number;
  type: "category" | "mood" | "curator";
}

export const shopCollections: Collection[] = [
  {
    slug: "new",
    name: "New Arrivals",
    description: "Fresh designs just dropped — be the first to wear them in the rain.",
    image: "/products/bali-sunrise.png",
    count: 6,
    type: "category",
  },
  {
    slug: "bestseller",
    name: "Best Sellers",
    description: "The ones everyone's talking about.",
    image: "/products/jungle-monsoon.png",
    count: 4,
    type: "category",
  },
  {
    slug: "essential",
    name: "Essentials",
    description: "Timeless colors, everyday rain protection.",
    image: "/products/volcanic-ash.png",
    count: 3,
    type: "category",
  },
];

export const moodCollections: Collection[] = [
  {
    slug: "print",
    name: "Bold Prints",
    description: "Banana leaves, coral reefs, and frangipani — nature as fashion.",
    image: "/products/coral-reef.png",
    count: 4,
    type: "mood",
  },
  {
    slug: "ombre",
    name: "Ombre & Gradient",
    description: "Colors that flow like a tropical sunset.",
    image: "/products/bali-sunrise.png",
    count: 2,
    type: "mood",
  },
  {
    slug: "heritage",
    name: "Heritage",
    description: "Batik-inspired patterns honoring Indonesian craft traditions.",
    image: "/products/temple-gold.png",
    count: 2,
    type: "mood",
  },
];

export const curatorCollections: Collection[] = [];
