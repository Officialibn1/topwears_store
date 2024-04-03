import SectionHeader from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { container } from "@/components/ui/container";
import { client } from "@/lib/sanity";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchCategoryProducts = async (category: string) => {
	const query = `*[_type == 'product' && category->name == '${category}'] {
						_id,
						name,
						'slug': slug.current,
						price,
						'categoryName': category->name,
						'imageUrl': images[0].asset->url
					}`;

	const products = await client.fetch(query);

	return products;
};

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
	const newProducts: Product[] = await fetchCategoryProducts(params.slug);

	return (
		<div
			id='new_products_section'
			className={`${container} mt-40  `}>
			<SectionHeader title={`${params.slug} Products`} />

			<div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 xl:gap-x-12 xl:gap-y-16 xl:grid-cols-3 '>
				{newProducts.map((product) => (
					<Link
						href={`/Product/${product.slug}`}
						key={product._id}
						className='group relative rounded-lg border overflow-hidden'>
						<div className='w-full h-4/5 overflow-hidden rounded-t-lg bg-foreground/20 group-hover:opacity-75'>
							<Image
								src={product.imageUrl}
								width={300}
								height={300}
								alt={product.slug}
								className='w-full h-full object-cover object-center'
							/>
						</div>

						<div className='flex flex-col justify-between h-1/5 px-4 py-4'>
							<div className='flex justify-between items-center'>
								<h1>{product.name}</h1>

								<h3>${product.price}</h3>
							</div>

							<Link
								href={`/Categories/${product.categoryName}`}
								className='z-[5]'>
								<Badge
									variant='secondary'
									className='w-fit'>
									{product.categoryName}
								</Badge>
							</Link>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
