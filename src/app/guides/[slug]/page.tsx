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
		<article className="prose lg:prose-xl mx-auto py-8">
			{data.guide.heroImage && (
				<Image
					src={data.guide.heroImage}
					alt={data.guide.title}
					width={1200}
					height={630}
					className="w-full h-auto rounded-lg mb-8"
				/>
			)}
			<h1>{data.guide.title}</h1>
			<p className="lead">{data.guide.description}</p>
			<div>
				<TinaMarkdown content={data.guide.body} />
			</div>
		</article>
	);
}

export async function generateStaticParams() {
	const { data } = await client.queries.guideConnection();
	const guides = data.guideConnection.edges?.map((edge: any) => ({
		slug: edge?.node?._sys.filename.replace(/\.md$/, ""),
	}));
	return guides || [];
}
