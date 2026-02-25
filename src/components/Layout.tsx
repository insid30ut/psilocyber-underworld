import React from "react";
import Link from "next/link";
import { buttonVariants, cn } from "@/components/Button";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground relative">
			{/* Ambient Background Effect */}
			<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
			<div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-background to-transparent" />

			<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
				<nav className="container mx-auto flex h-20 items-center justify-between px-6">
					<div className="flex items-center gap-2">
						<Link href="/" className="hover:opacity-80 transition-opacity hover:scale-105 duration-300">
							<img src="/297.png" alt="Psilocyber Underworld" className="h-12 w-12 rounded-full object-cover drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
						</Link>
					</div>
					<ul className="flex items-center gap-6">
						<li>
							<Link
								href="/about"
								className={cn(buttonVariants({ variant: "secondary" }), "rounded-full font-semibold px-6 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300")}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/guides"
								className={cn(buttonVariants({ variant: "secondary" }), "rounded-full font-semibold px-6 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300")}
							>
								Guides
							</Link>
						</li>
						<li>
							<Link
								href="/partners"
								className={cn(buttonVariants({ variant: "secondary" }), "rounded-full font-semibold px-6 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300")}
							>
								Partners
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex-grow container mx-auto px-6 pt-32 pb-16">
				{children}
			</main>
			<footer className="border-t border-white/5 bg-black/60 backdrop-blur-md py-12 mt-auto">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						<div className="text-center md:text-left">
							<h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Psilocyber Underworld</h3>
							<p className="text-sm text-muted-foreground mt-1 tracking-wide">Mycelial Knowledge Hub</p>
						</div>
						<div className="flex gap-6 text-sm font-medium text-muted-foreground">
							<Link href="/privacy" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Privacy</Link>
							<Link href="/terms" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Terms</Link>
							<Link href="/about" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Contact</Link>
						</div>
						<p className="text-sm text-muted-foreground/60">&copy; 2026 Psilocyber Underworld.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
