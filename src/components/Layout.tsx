import React from "react";
import { buttonVariants, cn } from "@/components/Button";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
			<header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black">
				<nav className="container mx-auto flex h-16 items-center justify-between px-4">
					<div className="flex items-center gap-2">
						<a href="/" className="hover:opacity-80 transition-opacity">
							<img src="/297.png" alt="Psilocyber Underworld" className="h-10 w-auto" />
						</a>
					</div>
					<ul className="flex items-center gap-4">
						<li>
							<a
								href="/guides"
								className={cn(buttonVariants({ variant: "secondary" }), "rounded-full")}
							>
								Guides
							</a>
						</li>
						<li>
							<a
								href="/vendors"
								className={cn(buttonVariants({ variant: "secondary" }), "rounded-full")}
							>
								Vendors
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex-grow container mx-auto px-4 pt-24 pb-12">
				{children}
			</main>
			<footer className="border-t border-white/10 bg-black/40 py-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-center md:text-left">
							<h3 className="text-lg font-semibold text-foreground">Psilocyber Underworld</h3>
							<p className="text-sm text-muted-foreground">Mycelial Knowledge Hub</p>
						</div>
						<div className="flex gap-4 text-sm text-muted-foreground">
							<a href="#" className="hover:text-primary transition-colors">Privacy</a>
							<a href="#" className="hover:text-primary transition-colors">Terms</a>
							<a href="#" className="hover:text-primary transition-colors">Contact</a>
						</div>
						<p className="text-sm text-muted-foreground">&copy; 2026 Psilocyber Underworld.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
