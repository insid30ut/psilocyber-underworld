import { client } from "@/../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { slug } = await params;
	if (!slug) {
		return {
			title: "Guide Not Found",
		};
	}
	const { data } = await client.queries.guide({
		relativePath: `${slug}.md`,
	});

	if (!data || !data.guide) {
		return {
			title: "Guide Not Found",
		};
	}

	return {
		title: data.guide.title,
		description: data.guide.description,
		openGraph: {
			title: data.guide.title,
			description: data.guide.description || undefined,
			images: data.guide.heroImage ? [{ url: data.guide.heroImage }] : undefined,
		}
	};
}


const components = {
	Callout: (props: { type: string; text: string }) => {
		const colors = {
			info: "bg-blue-500/10 text-blue-200 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
			warning: "bg-yellow-500/10 text-yellow-200 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]",
			danger: "bg-red-500/10 text-red-200 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]",
			success: "bg-green-500/10 text-green-200 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
		};
		// Default to info if type is invalid/missing
		const colorClass = colors[props.type as keyof typeof colors] || colors.info;

		return (
			<div className={`p-6 border-l-4 rounded-r-lg my-8 backdrop-blur-sm ${colorClass}`}>
				<p className="font-bold mb-2 uppercase text-xs tracking-widest opacity-80 flex items-center">
					{props.type}
				</p>
				<p className="text-lg">{props.text}</p>
			</div>
		);
	},
	h1: (props: any) => (
		<h1 className="text-4xl md:text-5xl font-extrabold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-sm" {...props} />
	),
	h2: (props: any) => (
		<h2 className="text-3xl md:text-4xl font-bold mt-14 mb-6 text-foreground border-b border-white/10 pb-4" {...props} />
	),
	h3: (props: any) => (
		<h3 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-foreground/90" {...props} />
	),
	h4: (props: any) => (
		<h4 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground/80" {...props} />
	),
	h5: (props: any) => (
		<h5 className="text-lg md:text-xl font-semibold mt-6 mb-2 text-foreground/80" {...props} />
	),
	h6: (props: any) => (
		<h6 className="text-base md:text-lg font-semibold mt-6 mb-2 text-foreground/80" {...props} />
	),
	p: (props: any) => (
		<p className="text-lg leading-relaxed mb-6 text-muted-foreground/90 font-light" {...props} />
	),
	ul: (props: any) => (
		<ul className="list-disc pl-6 mb-8 space-y-3 marker:text-primary" {...props} />
	),
	ol: (props: any) => (
		<ol className="list-decimal pl-6 mb-8 space-y-4 marker:text-primary marker:font-bold" {...props} />
	),
	li: (props: any) => (
		<li className="text-lg pl-2 text-muted-foreground/90" {...props} />
	),
	a: (props: any) => (
		<a className="text-primary hover:text-secondary underline underline-offset-4 decoration-primary/50 hover:decoration-secondary transition-colors font-medium cursor-pointer" {...props} />
	),
	strong: (props: any) => (
		<strong className="font-bold text-foreground" {...props} />
	),
	blockquote: (props: any) => (
		<blockquote className="border-l-4 border-primary/50 pl-6 italic text-muted-foreground my-8 bg-black/20 py-4 pr-4 rounded-r-lg" {...props} />
	),
	table: (props: any) => (
		<div className="w-full overflow-x-auto my-10 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
			<table className="w-full text-left border-collapse" {...props} />
		</div>
	),
	th: (props: any) => (
		<th className="border-b border-white/10 p-5 font-semibold text-primary bg-white/5 uppercase tracking-wider text-sm whitespace-nowrap" {...props} />
	),
	td: (props: any) => (
		<td className="border-b border-white/5 p-5 text-muted-foreground/90 align-top" {...props} />
	),
};

export default async function GuidePage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	if (!slug) {
		return notFound();
	}
	const { data } = await client.queries.guide({
		relativePath: `${slug}.md`,
	});

	if (!data || !data.guide) {
		notFound();
	}

	return (
		<div className="container mx-auto py-12 px-6 max-w-4xl mt-8">
			<Link href="/guides" className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-8 group font-medium text-sm tracking-widest uppercase">
				<span className="mr-3 transform group-hover:-translate-x-2 transition-transform">←</span> Back to Archives
			</Link>

			{data.guide.heroImage && (
				<div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] border border-white/10 group">
					<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
					<Image
						src={data.guide.heroImage}
						alt={data.guide.title}
						fill
						className="object-cover transition-transform duration-1000 group-hover:scale-105"
						priority
					/>
					<div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-tight">
							{data.guide.title}
						</h1>
					</div>
				</div>
			)}

			{!data.guide.heroImage && (
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-12 border-b border-white/10 pb-8 leading-tight">
					{data.guide.title}
				</h1>
			)}

			<div className="w-full">
				{data.guide.description && (
					<div className="mb-12 border-l-4 border-secondary pl-6 py-2 bg-gradient-to-r from-secondary/10 to-transparent rounded-r-lg">
						<p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic drop-shadow-sm">
							"{data.guide.description}"
						</p>
					</div>
				)}
				<div className="prose prose-invert prose-lg max-w-none">
					<TinaMarkdown content={data.guide.body} components={components} />
				</div>
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	const { data } = await client.queries.guideConnection();
	const guides = data.guideConnection.edges?.map((edge: any) => ({
		slug: edge?.node?._sys.filename.replace(/\.md$/, ""),
	}));
	return guides || [];
}
