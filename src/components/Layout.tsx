import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-800 text-white p-4">
				<nav className="container mx-auto flex justify-between items-center">
					<h1 className="text-2xl font-bold">
						<a href="/">Psilocyber Underworld</a>
					</h1>
					<ul className="flex space-x-4">
						<li>
							<a
								href="/"
								className="hover:underline"
							>
								Guides
							</a>
						</li>
						<li>
							<a
								href="/vendors"
								className="hover:underline"
							>
								Vendors
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex-grow container mx-auto p-4">{children}</main>
			<footer className="bg-gray-800 text-white p-4 text-center">
				<p>&copy; 2026 Psilocyber Underworld. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Layout;
