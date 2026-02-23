import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://mycelialfunguy.com"),
	title: {
		default: "Psilocyber Underworld",
		template: "%s | Psilocyber Underworld",
	},
	description: "A decentralized, open-source archive dedicated to the preservation, exploration, and distribution of advanced mycological protocols.",
	keywords: ["mycology", "mushroom cultivation", "spores", "teks", "mycelium", "protocols", "fungi"],
	openGraph: {
		title: "Psilocyber Underworld",
		description: "A decentralized, open-source archive dedicated to the preservation, exploration, and distribution of advanced mycological protocols.",
		url: "https://mycelialfunguy.com",
		siteName: "Psilocyber Underworld",
		images: [
			{
				url: "/psilocyberunderworldbanner.png",
				width: 1200,
				height: 630,
				alt: "Psilocyber Underworld Banner",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Psilocyber Underworld",
		description: "A decentralized, open-source archive dedicated to the preservation, exploration, and distribution of advanced mycological protocols.",
		images: ["/psilocyberunderworldbanner.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
