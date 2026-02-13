import Link from "next/link";
import { client } from "../../tina/__generated__/client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/Card";
import { Button } from "@/components/Button";

export default async function Home() {
	const { data } = await client.queries.guideConnection();
	const guides = data.guideConnection.edges;

	return (
		<div className="flex flex-col gap-12">
			{/* Hero Section */}
			<section className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
				<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
				<img
					src="/psilocyberunderworldbanner.png"
					alt="Psilocyber Underworld Banner"
					className="w-full h-[300px] md:h-[400px] object-cover"
				/>
				<div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-background to-transparent">
					<h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
						Fungal Knowledge Hub
					</h1>
					<p className="text-xl text-foreground/80 max-w-2xl mb-6 shadow-black drop-shadow-md">
						Advanced cultivation techniques, strain data, and underground resources for the modern mycologist.
					</p>
					<div className="flex gap-4">
						<Button size="lg" className="font-bold text-md">
							Start Cultivating
						</Button>
						<Button variant="outline" size="lg" className="bg-black/50 backdrop-blur-sm">
							Explore Strains
						</Button>
					</div>
				</div>
			</section>

			{/* Guides Grid */}
			<section>
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-3xl font-bold tracking-tight text-white">Latest Guides</h2>
					<Button variant="ghost" className="text-muted-foreground hover:text-primary">
						View All Guides &rarr;
					</Button>
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
			</section>
		</div>
	);
}
