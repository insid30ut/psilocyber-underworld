import type { Metadata } from "next";
import { getVendors } from "@/lib/vendors";

export const metadata: Metadata = {
	title: "Verified Vendors",
	description: "A curated network of trusted genetic suppliers, equipment fabricators, and cultivation resources.",
};
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/Card";

export default async function VendorsPage() {
	const vendors = await getVendors();

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4 border-b border-white/10 pb-8">
				<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent w-fit">
					Trusted Vendors
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl">
					Verified suppliers for spores, genetics, substrates, and mycology equipment.
				</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{vendors.map((vendor) => (
					<a
						key={vendor.id}
						href={vendor.website}
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						<Card className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
							<CardHeader className="flex flex-row items-center gap-4">
								{vendor.logoUrl ? (
									<Image
										src={vendor.logoUrl}
										alt={`${vendor.name} logo`}
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
										{vendor.name}
									</CardTitle>
									<p className="text-sm text-secondary tracking-wide uppercase mt-1">
										{vendor.category}
									</p>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{vendor.description}
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
