import { kv } from '@vercel/kv';

export interface Vendor {
  id: string;
  name: string;
  website: string;
  description: string;
  category: string;
  logoUrl: string;
}

// NOTE: You will need to add some data to your Vercel KV store for this to work.
// You can do this via the Vercel dashboard or by creating a simple script.
// Example data structure is in docs/DATABASE_SCHEMA.md

export async function getVendors(): Promise<Vendor[]> {
  // const vendors = await kv.get<Vendor[]>('vendors');
  // return vendors || [];
  return [
    {
      id: "bloom-social",
      name: "Bloom Social",
      website: "https://www.bloomsocial.media/",
      description: "Mushroom Cultivation Social Network",
      category: "Social",
      logoUrl: "https://www.bloomsocial.media/_next/image?url=%2Flogo.png&w=640&q=75",
    },
    {
      id: "inoculate-the-world",
      name: "Inoculate The World",
      website: "https://inoculatetheworld.com/",
      description: "Premium Spore Syringes, Liquid Cultures, and Genetics.",
      category: "Genetics",
      logoUrl: "https://inoculatetheworld.com/wp-content/uploads/2021/11/ITW-1200x200-1-1024x171.jpg",
    },
    {
      id: "microppose",
      name: "Microppose",
      website: "https://microppose.com/",
      description: "Filters, Injection Ports, and Specialized Cultivation Equipment.",
      category: "Equipment",
      logoUrl: "https://microppose.com/cdn/shop/files/mp_logo_new_black_with_color2_400x.png",
    }
  ];
}
