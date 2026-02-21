import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: "/admin",
				destination: "/admin/index.html",
			},
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: "www.bloomsocial.media",
			},
		],
	},
};

export default nextConfig;
