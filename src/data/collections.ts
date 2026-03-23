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
    slug: "new-gems",
    name: "New Gems",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/base5_645b16fc-5ec7-4911-ac8a-469b1996984e.jpg?v=1774195404&width=3000",
    count: 75,
    type: "category",
  },
  {
    slug: "bestsellers",
    name: "Best Sellers!",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/unique_unity_floor_01_c1adfab8-d398-44c2-9d4e-8c920b86f976.jpg?v=1757668314&width=3000",
    count: 55,
    type: "category",
  },
  {
    slug: "bargains",
    name: "Bargains!",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/files/masayachair1.jpg?v=1773415855&width=3000",
    count: 35,
    type: "category",
  },
];

export const moodCollections: Collection[] = [
  {
    slug: "nostalgia",
    name: "Nostalgia",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/Gogo_03-Firefly-Upscaler-2x-scale.jpg?v=1773698550&width=3000",
    count: 41,
    type: "mood",
  },
  {
    slug: "stripes",
    name: "Stripes",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/498285188_18510415615002741_7211812954703749358_n_859a7564-f754-47d6-8cfd-1726a6a6fc16.jpg?v=1769960230&width=3000",
    count: 26,
    type: "mood",
  },
  {
    slug: "do-not-eat",
    name: "Do Not Eat",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/Banana-Bolster.jpg?v=1768242923&width=3000",
    count: 23,
    type: "mood",
  },
  {
    slug: "village-life",
    name: "Village Life",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/Cottage_Cotton_Tote_Bag.webp?v=1773697185&width=3000",
    count: 14,
    type: "mood",
  },
  {
    slug: "in-bloom",
    name: "In Bloom",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/daisy1.jpg?v=1770652896&width=3000",
    count: 36,
    type: "mood",
  },
  {
    slug: "colour-block",
    name: "Colour Block",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/Adam-Solimar-Unique_60f5df7f-bbc0-45a3-a548-9455d9bf20e1.webp?v=1772905222&width=3000",
    count: 55,
    type: "mood",
  },
];

export const curatorCollections: Collection[] = [
  {
    slug: "malika",
    name: "Curated by Malika",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/croma.jpg?v=1772015382&width=3000",
    count: 326,
    type: "curator",
  },
  {
    slug: "george",
    name: "Curated by George",
    image:
      "https://www.icantaffordthisbutmaybeshecan.com/cdn/shop/collections/weather.observers_1709477006_3315655906110385643_45479040642.jpg?v=1770226066&width=3000",
    count: 149,
    type: "curator",
  },
];
