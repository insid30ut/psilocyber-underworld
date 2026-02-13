import Link from "next/link";
import { client } from "../../../tina/__generated__/client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/Card";
import { Button } from "@/components/Button";

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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {guides?.map((guide) => (
                    <Link
                        key={guide?.node?._sys.filename}
                        href={`/guides/${guide?.node?._sys.filename}`}
                        className="group"
                    >
                        <Card className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                            <div className="h-48 w-full overflow-hidden rounded-t-lg bg-muted relative">
                                {guide?.node?.heroImage ? (
                                    <img
                                        src={guide?.node?.heroImage}
                                        alt={guide?.node?.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                                        <span className="text-4xl">🍄</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <CardHeader>
                                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                                    {guide?.node?.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3 text-sm">
                                    {guide?.node?.description || "No description available."}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                                    Read Protocol
                                </span>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
