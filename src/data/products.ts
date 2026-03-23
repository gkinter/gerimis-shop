export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  images: string[];
  lifestyleImage?: string;
  category: string;
  color: string;
  sizes: string[];
  materials: string[];
  shippingFrom: string;
  shippingTo: string;
  leadTime?: string;
  tags: string[];
  soldOut?: boolean;
}

export const products: Product[] = [
  {
    slug: "bali-sunrise",
    name: "Bali Sunrise",
    price: 89,
    description:
      "Warm coral-to-orange ombre that captures the magic of a Balinese dawn. Lightweight, waterproof, and impossibly beautiful — a rain poncho for those who refuse to let rain dampen their style.",
    details: [
      "100% recycled polyester shell with PU coating",
      "Seam-sealed waterproof construction",
      "Adjustable hood with hidden drawcord",
      "Two side pockets with storm flaps",
      "Interior pocket for phone",
      "Pullover design with side snaps",
      "GERIMIS logo embroidered on chest",
    ],
    images: ["/products/bali-sunrise.png"],
    lifestyleImage: "/lifestyle/lifestyle-scooter.png",
    category: "Ombre Collection",
    color: "Coral / Orange",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating", "Recycled Nylon Lining"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    leadTime: "5-10 business days",
    tags: ["new", "bestseller", "ombre"],
  },
  {
    slug: "jungle-monsoon",
    name: "Jungle Monsoon",
    price: 95,
    description:
      "Deep tropical green adorned with hand-drawn banana leaf patterns. A rain poncho inspired by Ubud's lush jungles during the wet season — when everything comes alive.",
    details: [
      "100% recycled polyester shell with PU coating",
      "All-over banana leaf print",
      "Seam-sealed waterproof construction",
      "Relaxed unisex fit",
      "Adjustable cuffs with snap buttons",
      "GERIMIS woven label on back yoke",
    ],
    images: ["/products/jungle-monsoon.png"],
    lifestyleImage: "/lifestyle/lifestyle-rice-terrace.png",
    category: "Print Collection",
    color: "Tropical Green",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    leadTime: "5-10 business days",
    tags: ["new", "print", "bestseller"],
  },
  {
    slug: "ocean-drizzle",
    name: "Ocean Drizzle",
    price: 89,
    description:
      "Ocean blue rain poncho with abstract raindrop patterns that ripple across the fabric like water hitting the sea. For surf-town mornings and coastal strolls.",
    details: [
      "100% recycled polyester shell",
      "Abstract raindrop print",
      "Lightweight packable design",
      "Rolls into its own pocket",
      "Snap-button side closures",
      "GERIMIS logo printed on left chest",
    ],
    images: ["/products/ocean-drizzle.png"],
    lifestyleImage: "/lifestyle/lifestyle-surfer.png",
    category: "Print Collection",
    color: "Ocean Blue",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "print"],
  },
  {
    slug: "volcanic-ash",
    name: "Volcanic Ash",
    price: 95,
    originalPrice: 110,
    description:
      "Charcoal grey rain poncho with subtle geometric patterns inspired by Balinese temple carvings. The understated choice for those who keep it cool even in a downpour.",
    details: [
      "100% recycled polyester shell",
      "Geometric temple-inspired pattern",
      "Premium matte finish",
      "Lined hood with peak visor",
      "Internal drawcord waist",
      "GERIMIS metal badge on chest",
    ],
    images: ["/products/volcanic-ash.png"],
    lifestyleImage: "/lifestyle/lifestyle-temple.png",
    category: "Essential Collection",
    color: "Charcoal Grey",
    sizes: ["S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating", "Recycled Metal Hardware"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["essential", "bestseller"],
  },
  {
    slug: "temple-gold",
    name: "Temple Gold",
    price: 99,
    description:
      "Golden yellow poncho with batik-inspired patterns that pay homage to Indonesia's rich textile heritage. A sunshine-colored shield against the rain.",
    details: [
      "100% recycled polyester shell",
      "Batik-inspired heritage print",
      "Extended back hem for extra coverage",
      "Ventilation eyelets under arms",
      "Reflective GERIMIS logo for visibility",
    ],
    images: ["/products/temple-gold.png"],
    lifestyleImage: "/lifestyle/lifestyle-street-food.png",
    category: "Heritage Collection",
    color: "Golden Yellow",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "heritage"],
  },
  {
    slug: "frangipani-pink",
    name: "Frangipani Pink",
    price: 89,
    description:
      "Vibrant pink poncho with delicate floral motifs inspired by Bali's iconic frangipani blossoms. Bold, joyful, unapologetically colorful.",
    details: [
      "100% recycled polyester shell",
      "Frangipani floral print",
      "Cropped relaxed silhouette",
      "Oversized hood",
      "Kangaroo front pocket",
      "GERIMIS embroidered logo",
    ],
    images: ["/products/frangipani-pink.png"],
    lifestyleImage: "/lifestyle/lifestyle-bicycle.png",
    category: "Print Collection",
    color: "Magenta / Pink",
    sizes: ["XS", "S", "M", "L"],
    materials: ["Recycled Polyester", "PU Coating"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "print", "bestseller"],
  },
  {
    slug: "rice-terrace",
    name: "Rice Terrace",
    price: 85,
    description:
      "Sage green and earth tones in gentle stripes that echo the layered beauty of Tegallalang's rice paddies. A calm, grounded rain poncho — naturally beautiful.",
    details: [
      "100% recycled polyester shell",
      "Tonal stripe pattern",
      "Relaxed A-line fit",
      "Wide poncho cut for easy layering",
      "Packable into included tote bag",
      "GERIMIS tonal logo on back",
    ],
    images: ["/products/rice-terrace.png"],
    lifestyleImage: "/lifestyle/lifestyle-cafe.png",
    category: "Essential Collection",
    color: "Sage / Earth",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating", "Organic Cotton Tote"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["essential"],
  },
  {
    slug: "coral-reef",
    name: "Coral Reef",
    price: 95,
    description:
      "A riot of tropical color in an abstract coral print poncho. Inspired by the vibrant underwater world of Nusa Penida. For maximalists who embrace the storm.",
    details: [
      "100% recycled polyester shell",
      "Multi-color abstract coral print",
      "Oversized boyfriend fit",
      "Deep side-seam pockets",
      "Adjustable velcro cuffs",
      "GERIMIS printed logo on chest and back",
    ],
    images: ["/products/coral-reef.png"],
    lifestyleImage: "/lifestyle/lifestyle-beach-club.png",
    category: "Print Collection",
    color: "Multicolor",
    sizes: ["S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "print"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}
