import { MetadataRoute } from 'next';
import { client } from "../../tina/__generated__/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://mycelialfunguy.com';

    // Fetch all guides to build dynamic URLs
    const { data } = await client.queries.guideConnection();
    const guides = data?.guideConnection?.edges || [];

    const guideEntries: MetadataRoute.Sitemap = guides.map((edge) => ({
        url: `${baseUrl}/guides/${edge?.node?._sys.filename}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/partners`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...guideEntries,
    ];
}
