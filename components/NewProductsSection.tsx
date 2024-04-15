import React from "react";
import SectionHeader from "./ui/SectionHeader";
import { container } from "./ui/container";
import { client } from "@/lib/sanity";
import { Product } from "@/typings";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = {};

const fetchNewProducts = async () => {
	const query = `*[_type == 'product'][0...3]  | order(_createdAt asc)
                    {
                        _id,
                        name,
                        'slug': slug.current,
                        price,
						
                        'categoryName': category->name,
                        'imageUrl': images[0].asset->url
                    }`;

	const res = await client.fetch(query);

	return res;
};

const NewProductsSection = async (props: Props) => {
	const newProducts: Product[] = await fetchNewProducts();

	return (
		<div
			id='new_products_section'
			className={`${container} `}>
			<SectionHeader
				key={"new_product_title"}
				title='New Products'
				link='#new_products_section'
			/>

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

							<Badge
								variant='secondary'
								className='w-fit'>
								{product.categoryName}
							</Badge>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default NewProductsSection;
