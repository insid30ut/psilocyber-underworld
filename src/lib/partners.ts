import { client } from "../../tina/__generated__/client";

export interface Partner {
  id: string;
  name: string;
  website: string;
  description: string;
  category: string;
  logoUrl: string;
}

export async function getPartners(): Promise<Partner[]> {
  try {
    const { data } = await client.queries.partnerConnection();
    const partners = data.partnerConnection.edges?.map((edge) => {
      const node = edge?.node;
      return {
        id: node?._sys.filename || "",
        name: node?.name || "",
        website: node?.website || "",
        description: node?.description || "",
        category: node?.category || "",
        logoUrl: node?.logoUrl || "",
      };
    });
    return partners || [];
  } catch (error) {
    console.error("Failed to fetch partners from Tina CMS:", error);
    return [];
  }
}
