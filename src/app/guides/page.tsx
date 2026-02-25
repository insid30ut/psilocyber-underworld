import type { Metadata } from "next";
import { client } from "../../../tina/__generated__/client";

export const metadata: Metadata = {
    title: "The Archives",
    description: "Comprehensive protocols and data for advanced mycology. Master the art of cultivation with our verified guides.",
};
import GuideList from "./GuideList";
import { Hero } from "@/components/Hero";

export default async function GuidesPage() {
    const { data } = await client.queries.guideConnection();
    const guides = data.guideConnection.edges;

    return (
        <div className="flex flex-col gap-8">
            <Hero
                title="The Archives"
                subtitle="Comprehensive protocols and data for advanced mycology. Master the art of cultivation with our verified guides."
            />

            <GuideList guides={guides || []} />
        </div>
    );
}
