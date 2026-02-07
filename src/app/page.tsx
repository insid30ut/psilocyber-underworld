import Link from "next/link";
import { client } from "../../tina/__generated__/client";

export default async function Home() {
	const { data } = await client.queries.guideConnection();
	const guides = data.guideConnection.edges;

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-4xl font-bold mb-8">Mushroom Cultivation Guides</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{guides?.map((guide) => (
					<Link
						key={guide?.node?._sys.filename}
						href={`/guides/${guide?.node?._sys.filename}`}
						className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
					>
						<h2 className="text-2xl font-semibold mb-2">
							{guide?.node?.title}
						</h2>
					</Link>
				))}
			</div>
		</div>
	);
}
