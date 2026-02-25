import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Decentralized Mycology",
	description: "A central hub for the modern mycological community, offering trusted partners, cultivation guides, and shared mycelial knowledge.",
};
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";

export default function Home() {
	return (
		<div className="flex flex-col gap-10 min-h-[80vh] justify-center items-center pb-8 pt-4">
			<Hero
				titleLine1="Welcome to the"
				titleLine2="Psilocyber Underworld"
			/>

			{/* Content Section */}
			<section className="flex flex-col items-center text-center gap-10 max-w-4xl mx-auto px-6">
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
					Welcome to the underground. A curated repository of advanced cultivation techniques, strain data, and resources for the modern mycologist.
				</p>
				<p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-3xl">
					Psilocyber Underworld serves as a central hub for the modern mycological community. Our webapp is designed to securely connect cultivators with trusted partners, provide comprehensive, step-by-step cultivation guides, and foster a network of shared mycelial knowledge. Whether you are seeking high-quality spores, advanced substrate recipes, or simply a sanctuary for learning, you have found your digital underground.
				</p>
				<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full sm:w-auto">
					<Link href="/guides" className="w-full sm:w-auto">
						<Button size="lg" className="w-full font-bold text-lg px-10 py-7 h-auto rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] bg-primary text-primary-foreground border border-primary/50">
							Enter the Archives
						</Button>
					</Link>
					<Link href="/partners" className="w-full sm:w-auto">
						<Button variant="outline" size="lg" className="w-full font-bold text-lg px-10 py-7 h-auto rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:border-secondary hover:text-secondary group">
							Network Partners
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
