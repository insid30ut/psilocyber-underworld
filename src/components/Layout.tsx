import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-800 text-white p-4">
				<nav className="container mx-auto">
					<h1 className="text-2xl font-bold">Psilocyber Underworld</h1>
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
