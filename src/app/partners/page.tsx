import type { Metadata } from "next";
import { getPartners } from "@/lib/partners";

export const metadata: Metadata = {
	title: "Network Partners",
	description: "A curated network of trusted genetic suppliers, equipment fabricators, social platforms, and cultivation resources.",
};
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/Card";

export default async function PartnersPage() {
	const partners = await getPartners();

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4 border-b border-white/10 pb-8">
				<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent w-fit">
					Network Partners
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl">
					Verified suppliers, platforms, and tools for the modern mycologist.
				</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{partners.map((partner) => (
					<a
						key={partner.id}
						href={partner.website}
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						<Card className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
							<CardHeader className="flex flex-row items-center gap-4">
								{partner.logoUrl ? (
									<Image
										src={partner.logoUrl}
										alt={`${partner.name} logo`}
										width={48}
										height={48}
										className="rounded-full bg-black border border-white/10"
									/>
								) : (
									<div className="w-12 h-12 rounded-full border border-white/10 bg-muted flex items-center justify-center text-xl">
										🍄
									</div>
								)}
								<div>
									<CardTitle className="text-xl group-hover:text-primary transition-colors">
										{partner.name}
									</CardTitle>
									<p className="text-sm text-secondary tracking-wide uppercase mt-1">
										{partner.category}
									</p>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{partner.description}
								</p>
							</CardContent>
							<CardFooter>
								<span className="text-xs font-medium text-accent uppercase tracking-wider group-hover:underline">
									Visit Website
								</span>
							</CardFooter>
						</Card>
					</a>
				))}
			</div>
		</div>
	);
}
