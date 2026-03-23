export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  headline: string;
  description: string;
  story: string;
  details: string[];
  images: string[];
  lifestyleImage?: string;
  category: string;
  color: string;
  colorHex: string;
  sizes: string[];
  materials: string[];
  care: string[];
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
    headline: "Dawn breaks. You're already dressed for it.",
    description:
      "Warm coral-to-orange ombre that captures the magic of a Balinese dawn. Lightweight, waterproof, and impossibly beautiful — a rain poncho for those who refuse to let rain dampen their style.",
    story:
      "We designed the Bali Sunrise watching the sky change over Sanur Beach at 5:47am. That exact gradient — from soft coral to deep peach — became this poncho. It's our most photographed piece for a reason.",
    details: [
      "100% recycled polyester shell with PU coating",
      "Seam-sealed waterproof construction",
      "Adjustable hood with hidden drawcord",
      "Two side pockets with storm flaps",
      "Interior pocket for phone",
      "Pullover design with side snaps",
      "GERIMIS logo embroidered on chest",
    ],
    images: [
      "/products/bali-sunrise.png",
      "/products/bali-sunrise-back.png",
      "/products/bali-sunrise-detail.png",
    ],
    lifestyleImage: "/lifestyle/lifestyle-scooter.png",
    category: "Ombre Collection",
    color: "Coral / Orange",
    colorHex: "#E07A5F",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating", "Recycled Nylon Lining"],
    care: ["Machine wash cold", "Hang dry", "Do not iron", "Do not bleach"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    leadTime: "5-10 business days",
    tags: ["new", "bestseller", "ombre"],
  },
  {
    slug: "jungle-monsoon",
    name: "Jungle Monsoon",
    price: 95,
    headline: "Wear the jungle.",
    description: "Deep tropical green adorned with hand-drawn banana leaf patterns. Inspired by Ubud's lush jungles during the wet season — when everything comes alive.",
    story: "Our illustrator spent two weeks sketching leaves in the Campuhan Ridge Walk forest. Every leaf on this poncho is drawn from a real plant she found there.",
    details: ["100% recycled polyester shell with PU coating", "All-over banana leaf print", "Seam-sealed waterproof construction", "Relaxed unisex fit", "Adjustable cuffs with snap buttons", "GERIMIS woven label on back yoke"],
    images: ["/products/jungle-monsoon.png", "/products/jungle-monsoon-back.png", "/products/jungle-monsoon-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-rice-terrace.png",
    category: "Print Collection",
    color: "Tropical Green",
    colorHex: "#2D6A4F",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    care: ["Machine wash cold", "Hang dry", "Do not iron print", "Do not bleach"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    leadTime: "5-10 business days",
    tags: ["new", "print", "bestseller"],
  },
  {
    slug: "ocean-drizzle",
    name: "Ocean Drizzle",
    price: 89,
    headline: "Where the sky meets the sea.",
    description: "Ocean blue with abstract raindrop patterns that ripple across the fabric like water hitting the sea. For surf-town mornings and coastal strolls.",
    story: "Named after the phenomenon when rain falls so lightly on the ocean that the surface looks like it's breathing. We watched this from Bingin Beach and knew we had to capture it.",
    details: ["100% recycled polyester shell", "Abstract raindrop print", "Lightweight packable design", "Rolls into its own pocket", "Snap-button side closures", "GERIMIS logo printed on left chest"],
    images: ["/products/ocean-drizzle.png", "/products/ocean-drizzle-back.png", "/products/ocean-drizzle-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-surfer.png",
    category: "Print Collection",
    color: "Ocean Blue",
    colorHex: "#457B9D",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    care: ["Machine wash cold", "Hang dry", "Do not iron", "Do not bleach"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "print"],
  },
  {
    slug: "volcanic-ash",
    name: "Volcanic Ash",
    price: 95,
    originalPrice: 110,
    headline: "Cool under pressure.",
    description: "Charcoal grey with subtle geometric patterns inspired by Balinese temple carvings. The understated choice for those who keep it cool even in a downpour.",
    story: "The pattern is lifted directly from the stone carvings at Goa Gajah, Bali's ancient elephant cave. Sacred geometry, reimagined for the streets.",
    details: ["100% recycled polyester shell", "Geometric temple-inspired pattern", "Premium matte finish", "Lined hood with peak visor", "Internal drawcord waist", "GERIMIS metal badge on chest"],
    images: ["/products/volcanic-ash.png", "/products/volcanic-ash-back.png", "/products/volcanic-ash-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-temple.png",
    category: "Essential Collection",
    color: "Charcoal Grey",
    colorHex: "#4A4A4A",
    sizes: ["S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating", "Recycled Metal Hardware"],
    care: ["Machine wash cold", "Hang dry", "Do not iron", "Do not bleach"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["essential", "bestseller"],
  },
  {
    slug: "temple-gold",
    name: "Temple Gold",
    price: 99,
    headline: "Dressed in offerings.",
    description: "Golden yellow with batik-inspired patterns that pay homage to Indonesia's rich textile heritage. A sunshine-colored shield against the rain.",
    story: "Every morning in Bali, women carry golden canang sari offerings to the temples. That warm, sacred yellow inspired this poncho — a wearable offering to the rain gods.",
    details: ["100% recycled polyester shell", "Batik-inspired heritage print", "Extended back hem for extra coverage", "Ventilation eyelets under arms", "Reflective GERIMIS logo for visibility"],
    images: ["/products/temple-gold.png", "/products/temple-gold-back.png", "/products/temple-gold-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-street-food.png",
    category: "Heritage Collection",
    color: "Golden Yellow",
    colorHex: "#E9C46A",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    care: ["Machine wash cold", "Hang dry", "Do not iron print", "Do not bleach"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "heritage"],
  },
  {
    slug: "frangipani-pink",
    name: "Frangipani Pink",
    price: 89,
    headline: "Bloom in the rain.",
    description: "Vibrant pink with delicate floral motifs inspired by Bali's iconic frangipani blossoms. Bold, joyful, unapologetically colorful.",
    story: "Frangipani trees drop their flowers in the rain. The ground becomes a pink carpet. This poncho captures that moment — floral chaos, beautiful mess.",
    details: ["100% recycled polyester shell", "Frangipani floral print", "Cropped relaxed silhouette", "Oversized hood", "Kangaroo front pocket", "GERIMIS embroidered logo"],
    images: ["/products/frangipani-pink.png", "/products/frangipani-pink-back.png", "/products/frangipani-pink-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-bicycle.png",
    category: "Print Collection",
    color: "Magenta / Pink",
    colorHex: "#E84393",
    sizes: ["XS", "S", "M", "L"],
    materials: ["Recycled Polyester", "PU Coating"],
    care: ["Machine wash cold", "Hang dry", "Do not iron", "Do not bleach"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["new", "print", "bestseller"],
  },
  {
    slug: "rice-terrace",
    name: "Rice Terrace",
    price: 85,
    headline: "Layers of calm.",
    description: "Sage green and earth tones in gentle stripes that echo the layered beauty of Tegallalang's rice paddies. Calm, grounded, naturally beautiful.",
    story: "Stand at the edge of Tegallalang and count the shades of green. We counted seventeen. This poncho tries to wear them all.",
    details: ["100% recycled polyester shell", "Tonal stripe pattern", "Relaxed A-line fit", "Wide poncho cut for easy layering", "Packable into included tote bag", "GERIMIS tonal logo on back"],
    images: ["/products/rice-terrace.png", "/products/rice-terrace-back.png", "/products/rice-terrace-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-cafe.png",
    category: "Essential Collection",
    color: "Sage / Earth",
    colorHex: "#8BA888",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating", "Organic Cotton Tote"],
    care: ["Machine wash cold", "Hang dry", "Do not iron", "Do not bleach", "Tote bag: hand wash"],
    shippingFrom: "Bali, Indonesia",
    shippingTo: "Worldwide",
    tags: ["essential"],
  },
  {
    slug: "coral-reef",
    name: "Coral Reef",
    price: 95,
    headline: "Chaos, in color.",
    description: "A riot of tropical color in an abstract coral print. Inspired by the vibrant underwater world of Nusa Penida. For maximalists who embrace the storm.",
    story: "We snorkeled at Crystal Bay and saw colors that shouldn't exist. This poncho is what happens when you try to wear an entire reef.",
    details: ["100% recycled polyester shell", "Multi-color abstract coral print", "Oversized boyfriend fit", "Deep side-seam pockets", "Adjustable velcro cuffs", "GERIMIS printed logo on chest and back"],
    images: ["/products/coral-reef.png", "/products/coral-reef-back.png", "/products/coral-reef-detail.png"],
    lifestyleImage: "/lifestyle/lifestyle-beach-club.png",
    category: "Print Collection",
    color: "Multicolor",
    colorHex: "#E76F51",
    sizes: ["S", "M", "L", "XL"],
    materials: ["Recycled Polyester", "PU Coating"],
    care: ["Machine wash cold", "Hang dry", "Do not iron print", "Do not bleach"],
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
