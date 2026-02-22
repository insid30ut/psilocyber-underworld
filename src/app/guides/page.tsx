import { client } from "../../../tina/__generated__/client";
import GuideList from "./GuideList";

export default async function GuidesPage() {
    const { data } = await client.queries.guideConnection();
    const guides = data.guideConnection.edges;

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent w-fit">
                    The Archives
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Comprehensive protocols and data for advanced mycology.
                    Master the art of cultivation with our verified guides.
                </p>
            </div>

            <GuideList guides={guides || []} />
        </div>
    );
}
