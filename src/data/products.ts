export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  vendor: string;
  vendorSlug: string;
  description: string;
  images: string[];
  category: string;
  shippingFrom: string;
  shippingTo: string;
  leadTime?: string;
  affiliateUrl: string;
  tags: string[];
}

export const products: Product[] = [
  {
    slug: "arise-limited-edition-figurine",
    name: "Arise Limited Edition",
    price: 442,
    originalPrice: 531,
    vendor: "Marylou Faure",
    vendorSlug: "marylou-faure",
    description:
      "A new sensual figurine from the one and only Marylou Faure. Limited edition of 100 available on pre-order only. Hail to curves! Shipping April 2026.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Arise-InSitu-4.jpg?v=1767987433&width=3000",
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Arise-InSitu-2.jpg?v=1767987433&width=3000",
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/ARISE-04.jpg?v=1767987018&width=3000",
    ],
    category: "Art & Objects",
    shippingFrom: "France",
    shippingTo: "Worldwide",
    leadTime: "12-14 weeks",
    affiliateUrl: "#",
    tags: ["new-gems", "bestsellers", "colour-block"],
  },
  {
    slug: "multicolour-stripes-ceramics",
    name: "Multicolour Stripes Ceramics",
    price: 69,
    vendor: "Kangan Arora",
    vendorSlug: "kangan-arora",
    description:
      "Hand-painted striped ceramics that bring joy to every table setting. Each piece is unique with its own pattern variations.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/base2.jpg?v=1770482133&width=3000",
    ],
    category: "Homeware",
    shippingFrom: "United Kingdom",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["new-gems", "stripes", "in-bloom"],
  },
  {
    slug: "the-multi-brick-rings",
    name: "The Multi Brick Rings",
    price: 260,
    vendor: "Studio Gogo",
    vendorSlug: "studio-gogo",
    description:
      "Playful stackable rings crafted from colourful resin bricks. Mix, match, and build your own combination.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Gogo_hero_04_52991ff2-4346-4344-95ae-79c719288823.gif?v=1773185135&width=3000",
    ],
    category: "Jewellery",
    shippingFrom: "South Korea",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["new-gems", "nostalgia", "colour-block"],
  },
  {
    slug: "sylas-sandals",
    name: "Sylas Sandals",
    price: 307,
    vendor: "Charlotte Stone",
    vendorSlug: "charlotte-stone",
    description:
      "Sculptural sandals designed for both comfort and statement-making style. Handcrafted with premium materials.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Sylas-Solimar-1_4d8c425c-2153-4753-9624-ffc7374a8690.jpg?v=1772904650&width=3000",
    ],
    category: "Shoes",
    shippingFrom: "USA",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["new-gems", "colour-block"],
  },
  {
    slug: "moos-seating-object",
    name: "Moos Seating Object",
    price: 1055,
    vendor: "Ikonic Toys",
    vendorSlug: "ikonic-toys",
    description:
      "A sculptural seating object that doubles as a work of art. Organic forms inspired by natural landscapes.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Ikonic_Moos_03.jpg?v=1757068324&width=3000",
    ],
    category: "Furniture & Lights",
    shippingFrom: "Netherlands",
    shippingTo: "Europe",
    affiliateUrl: "#",
    tags: ["bestsellers"],
  },
  {
    slug: "fruit-boss",
    name: "Fruit Boss",
    price: 21,
    vendor: "Weast Coast Games",
    vendorSlug: "weast-coast-games",
    description:
      "A delightfully chaotic card game about fruit, strategy, and being the boss. Perfect for game nights.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/weastcoastgames_1769615022_3820130150235587083_48963231891.jpg?v=1771161256&width=3000",
    ],
    category: "Games",
    shippingFrom: "USA",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bargains", "do-not-eat"],
  },
  {
    slug: "flower-desk-lamps",
    name: "The Flower Lights",
    price: 236,
    vendor: "Unique Unity",
    vendorSlug: "unique-unity",
    description:
      "Whimsical flower-shaped desk lamps that bloom with warm light. Available in multiple colours.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/unique_unity_floor_01_c1adfab8-d398-44c2-9d4e-8c920b86f976.jpg?v=1757668314&width=3000",
    ],
    category: "Furniture & Lights",
    shippingFrom: "Italy",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bestsellers", "in-bloom"],
  },
  {
    slug: "the-village-textile-series",
    name: "The Village Textile Series",
    price: 3242,
    vendor: "Kangan Arora",
    vendorSlug: "kangan-arora",
    description:
      "Exquisite handwoven textiles inspired by village life. Each piece tells a story of traditional craftsmanship.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Village-ll_portrait_4-1044x1446.jpg?v=1773597202&width=3000",
    ],
    category: "Textiles & Rugs",
    shippingFrom: "India",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["new-gems", "village-life"],
  },
  {
    slug: "clean-cut-candleholder",
    name: "Clean Cut Candleholder",
    price: 266,
    vendor: "Lex Pott",
    vendorSlug: "lex-pott",
    description:
      "Geometric candleholder with clean lines and a striking presence. Cast in solid brass with oxidized finish.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/CiIquGgIBnG.png?v=1773996916&width=3000",
    ],
    category: "Homeware",
    shippingFrom: "Netherlands",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["new-gems"],
  },
  {
    slug: "fuck-what-fucks-you-ring",
    name: "Fuck What Fucks You Ring",
    price: 59,
    vendor: "Self Love",
    vendorSlug: "self-love",
    description:
      "A bold statement ring with an empowering message. Sterling silver with hand-engraved lettering.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/selflove-cover.jpg?v=1769614072&width=3000",
    ],
    category: "Jewellery",
    shippingFrom: "Spain",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bargains"],
  },
  {
    slug: "the-simple-butter-knife",
    name: "The Simple Butter Knife",
    price: 43,
    vendor: "Florentine",
    vendorSlug: "florentine",
    description:
      "Elegantly minimal butter knife designed by Oded Webman. Simple form, beautiful function.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Florentine-Collaborations-Simple-Butter-Knife-Oded-Webman-All-02_027098e6-6e52-4fc1-8ec0-c4c1b0ddfef9.jpg?v=1773605502&width=3000",
    ],
    category: "Tableware",
    shippingFrom: "Israel",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bargains"],
  },
  {
    slug: "chroma-scissors",
    name: "Chroma Scissors",
    price: 50,
    vendor: "Hay",
    vendorSlug: "hay",
    description:
      "Colour-drenched scissors that make cutting a joyful experience. Japanese stainless steel blades.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/chroma_6ab75ca6-2232-4ac3-b11b-7abee00fd238.gif?v=1771277761&width=3000",
    ],
    category: "Office & Tech",
    shippingFrom: "Denmark",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bargains", "colour-block"],
  },
  {
    slug: "fleuron-headpiece",
    name: "Fleuron Headpiece",
    price: 2611,
    vendor: "Awon Golding",
    vendorSlug: "awon-golding",
    description:
      "A breathtaking floral headpiece crafted by milliner Awon Golding. Wearable sculpture for special occasions.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/IMG_6389.jpg?v=1774172850&width=3000",
    ],
    category: "Accessories",
    shippingFrom: "United Kingdom",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["new-gems", "in-bloom"],
  },
  {
    slug: "untitled-vase",
    name: "Untitled Vase",
    price: 884,
    vendor: "Bitossi Ceramiche",
    vendorSlug: "bitossi-ceramiche",
    description:
      "A striking ceramic vase from the legendary Bitossi Ceramiche. Mid-century Italian craftsmanship at its finest.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/bitossi_ceramiche_1757764853_3720723720177295217_4859527457.jpg?v=1768844549&width=3000",
    ],
    category: "Homeware",
    shippingFrom: "Italy",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["nostalgia"],
  },
  {
    slug: "a-poor-collectors-guide",
    name: "A Poor Collector's Guide to Buying Great Art",
    price: 36,
    vendor: "Gestalten",
    vendorSlug: "gestalten",
    description:
      "An essential guide for art lovers on a budget by Erling Kagge. Learn to collect with confidence.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Guidetobuyingart_Erling_Kagge_book_gestalten_2000x_87543701-f6f2-4a03-a5e8-58d12c64a0e0.jpg?v=1756241993&width=3000",
    ],
    category: "Prints & Books",
    shippingFrom: "Germany",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bargains"],
  },
  {
    slug: "happy-swings",
    name: "Rings & Trapeze",
    price: 57,
    vendor: "Under The Nile",
    vendorSlug: "under-the-nile",
    description:
      "Playful hanging rings and trapeze for indoor play. Made from sustainably sourced wood and organic cotton.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/rings4.jpg?v=1765039092&width=3000",
    ],
    category: "Toys",
    shippingFrom: "Egypt",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["bargains"],
  },
  {
    slug: "the-brutto-clocks",
    name: "Don't Worry, Be Late Clock",
    price: 71,
    vendor: "Brutto",
    vendorSlug: "brutto",
    description:
      "A cheeky wall clock that reminds you to slow down. Because time is a construct, darling.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/BE-LATE_Orologio-Web_14_ee967d52-a03e-4482-b8b6-24c146f0ee48.jpg?v=1766263791&width=3000",
    ],
    category: "Homeware",
    shippingFrom: "Italy",
    shippingTo: "Europe",
    affiliateUrl: "#",
    tags: ["nostalgia"],
  },
  {
    slug: "pipe-frame-mini",
    name: "Pipe Frame Mini",
    price: 1533,
    vendor: "TF Design",
    vendorSlug: "tf-design",
    description:
      "An architectural picture frame that turns any print into a gallery piece. Powder-coated steel tube construction.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/3993f2_888459f4a23f47f6b02b4474c0d5d937_mv2.jpg-Firefly-Upscaler-2x-scale.jpg?v=1770299361&width=3000",
    ],
    category: "Homeware",
    shippingFrom: "Israel",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["nostalgia"],
  },
  {
    slug: "kumi-sugai-lithographs",
    name: "Kumi Sugaï Lithographs",
    price: 590,
    vendor: "Bisou Gallery",
    vendorSlug: "bisou-gallery",
    description:
      "Original lithographs by the renowned Japanese abstract artist Kumi Sugaï. Vibrant geometric compositions.",
    images: [
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/Bisou_gallery_01_4fabfa13-d4c2-4244-8963-ba77365ab50d.jpg?v=1756218489&width=3000",
    ],
    category: "Art & Objects",
    shippingFrom: "France",
    shippingTo: "Worldwide",
    affiliateUrl: "#",
    tags: ["colour-block"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}
