import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Decentralized Mycology",
	description: "A central hub for the modern mycological community, offering verified vendors, cultivation guides, and shared mycelial knowledge.",
};
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<div className="flex flex-col gap-10 min-h-[80vh] justify-center items-center pb-8 pt-4">
			{/* Hero Section */}
			<section className="relative w-full mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] group">
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
				<div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-primary/0 transition-colors duration-700" />
				<img
					src="/psilocyberunderworldbanner.png"
					alt="Psilocyber Underworld Banner"
					className="w-full h-[300px] md:h-[500px] xl:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
				/>
				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
						<span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mix-blend-plus-lighter">
							Welcome to the
						</span>
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
							Psilocyber Underworld
						</span>
					</h1>
				</div>
			</section>

			{/* Content Section */}
			<section className="flex flex-col items-center text-center gap-10 max-w-4xl mx-auto px-6">
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
					Welcome to the underground. A curated repository of advanced cultivation techniques, strain data, and resources for the modern mycologist.
				</p>
				<p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-3xl">
					Psilocyber Underworld serves as a central hub for the modern mycological community. Our webapp is designed to securely connect cultivators with verified vendors, provide comprehensive, step-by-step cultivation guides, and foster a network of shared mycelial knowledge. Whether you are seeking high-quality spores, advanced substrate recipes, or simply a sanctuary for learning, you have found your digital underground.
				</p>
				<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full sm:w-auto">
					<Link href="/guides" className="w-full sm:w-auto">
						<Button size="lg" className="w-full font-bold text-lg px-10 py-7 h-auto rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] bg-primary text-primary-foreground border border-primary/50">
							Enter the Archives
						</Button>
					</Link>
					<Link href="/vendors" className="w-full sm:w-auto">
						<Button variant="outline" size="lg" className="w-full font-bold text-lg px-10 py-7 h-auto rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:border-secondary hover:text-secondary group">
							Verified Vendors
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
