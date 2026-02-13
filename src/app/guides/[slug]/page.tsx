import { client } from "@/../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Metadata } from "next";
import Image from "next/image";
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
	};
}


const components = {
	Callout: (props: { type: string; text: string }) => {
		const colors = {
			info: "bg-blue-100 text-blue-800 border-blue-500",
			warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
			danger: "bg-red-100 text-red-800 border-red-500",
			success: "bg-green-100 text-green-800 border-green-500",
		};
		// Default to info if type is invalid/missing
		const colorClass = colors[props.type as keyof typeof colors] || colors.info;

		return (
			<div className={`p-4 border-l-4 rounded my-6 ${colorClass}`}>
				<p className="font-bold mb-1 uppercase text-xs tracking-wider opacity-80">
					{props.type}
				</p>
				<p>{props.text}</p>
			</div>
		);
	},
	// bold: (props: any) => <strong className="font-extrabold text-primary" {...props} />,
	h1: (props: any) => (
		<h1 className="text-5xl font-bold text-center mt-12 mb-6 text-primary drop-shadow-sm" {...props} />
	),
	h2: (props: any) => (
		<h2 className="text-4xl font-semibold text-center mt-10 mb-5 text-foreground border-b border-border/50 pb-2" {...props} />
	),
	h3: (props: any) => (
		<h3 className="text-3xl font-semibold mt-8 mb-4 text-foreground/90" {...props} />
	),
	h4: (props: any) => (
		<h4 className="text-2xl font-semibold mt-6 mb-3 text-foreground/80" {...props} />
	),
	h5: (props: any) => (
		<h5 className="text-xl font-semibold mt-4 mb-2 text-foreground/80" {...props} />
	),
	h6: (props: any) => (
		<h6 className="text-lg font-semibold mt-4 mb-2 text-foreground/80" {...props} />
	),
	p: (props: any) => (
		<p className="text-lg leading-relaxed mb-6 text-muted-foreground/90" {...props} />
	),
	ul: (props: any) => (
		<ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
	),
	ol: (props: any) => (
		<ol className="list-decimal pl-6 mb-6 space-y-4" {...props} />
	),
	li: (props: any) => (
		<li className="text-xl pl-2 marker:text-primary marker:font-bold" {...props} />
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
		<div className="container mx-auto py-12 max-w-4xl">
			{data.guide.heroImage && (
				<div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8 shadow-2xl border border-white/10">
					<Image
						src={data.guide.heroImage}
						alt={data.guide.title}
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
					<div className="absolute bottom-0 left-0 p-8">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
							{data.guide.title}
						</h1>
					</div>
				</div>
			)}

			{!data.guide.heroImage && (
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-4">
					{data.guide.title}
				</h1>
			)}

			<div className="prose prose-invert prose-lg max-w-none pt-2">
				{data.guide.description && (
					<p className="text-xl text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-4 italic">
						{data.guide.description}
					</p>
				)}
				<TinaMarkdown content={data.guide.body} components={components} />
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
