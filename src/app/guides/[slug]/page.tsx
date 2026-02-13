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
				<TinaMarkdown content={data.guide.body} />
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
