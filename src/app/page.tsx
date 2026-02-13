import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<div className="flex flex-col gap-12 min-h-[80vh] justify-center">
			{/* Hero Section */}
			{/* Hero Section */}
			<section className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
				<div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
				<img
					src="/psilocyberunderworldbanner.png"
					alt="Psilocyber Underworld Banner"
					className="w-full h-[400px] md:h-[500px] object-cover"
				/>
				<div className="absolute inset-0 z-20 flex items-center justify-center p-4">
					<h1 className="text-3xl md:text-5xl font-bold text-white/70 tracking-widest uppercase drop-shadow-lg text-center mix-blend-overlay">
						Welcome to the Psilocyber Underworld
					</h1>
				</div>
			</section>

			{/* Content Section */}
			<section className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto px-4">
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
					Welcome to the underground. A curated repository of advanced cultivation techniques, strain data, and resources for the modern mycologist.
				</p>
				<div className="flex flex-wrap justify-center gap-6">
					<Link href="/guides">
						<Button size="lg" className="font-bold text-lg px-8 py-6 h-auto">
							Enter the Archives
						</Button>
					</Link>
					<Link href="/vendors">
						<Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
							Verified Vendors
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
