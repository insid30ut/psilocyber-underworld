import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<div className="flex flex-col gap-12 min-h-[80vh] justify-center">
			{/* Hero Section */}
			<section className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
				<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
				<img
					src="/psilocyberunderworldbanner.png"
					alt="Psilocyber Underworld Banner"
					className="w-full h-[500px] object-cover"
				/>
				<div className="absolute bottom-0 left-0 p-12 z-20 w-full bg-gradient-to-t from-background via-background/80 to-transparent">
					<h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
						Fungal Knowledge Hub
					</h1>
					<p className="text-2xl text-foreground/90 max-w-3xl mb-8 shadow-black drop-shadow-md leading-relaxed">
						Welcome to the underground. A curated repository of advanced cultivation techniques, strain data, and resources for the modern mycologist.
					</p>
					<div className="flex gap-6">
						<Link href="/guides">
							<Button size="lg" className="font-bold text-lg px-8 py-6 h-auto">
								Enter the Archives
							</Button>
						</Link>
						<Link href="/vendors">
							<Button variant="outline" size="lg" className="bg-black/50 backdrop-blur-sm text-lg px-8 py-6 h-auto">
								Verified Vendors
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
