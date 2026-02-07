import { getVendors } from "@/lib/vendors";
import Image from "next/image";

export default async function VendorsPage() {
	const vendors = await getVendors();

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-4xl font-bold mb-8">Trusted Vendors</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{vendors.map((vendor) => (
					<a
						key={vendor.id}
						href={vendor.website}
						target="_blank"
						rel="noopener noreferrer"
						className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
					>
						<div className="flex items-center mb-4">
							{vendor.logoUrl && (
								<Image
									src={vendor.logoUrl}
									alt={`${vendor.name} logo`}
									width={48}
									height={48}
									className="mr-4"
								/>
							)}
							<h2 className="text-2xl font-semibold">{vendor.name}</h2>
						</div>
						<p className="text-gray-600 mb-2">{vendor.category}</p>
						<p>{vendor.description}</p>
					</a>
				))}
			</div>
		</div>
	);
}
