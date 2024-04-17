import React from "react";
import { client } from "@/lib/sanity";
import { Product } from "@/typings";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { container } from "@/components/ui/container";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const dynamic = "force-dynamic";

type Props = {};

const fetchAllProducts = async () => {
	const query = `*[_type == 'product'] | order(_createdAt asc)
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

const ProductsPage = async (props: Props) => {
	const products: Product[] = await fetchAllProducts();
	return (
		<div className={`${container} mt-40  `}>
			<div className=' flex justify-between items-center'>
				<h1 className='text-xl font-semibold '>
					{products.length} {products.length < 2 ? "product" : "products"}
				</h1>

				<Select>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Sort By' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Sort By</SelectLabel>
							<SelectItem value='date:desc'>Newest</SelectItem>
							<SelectItem value='date:asc'>Oldest</SelectItem>
							<SelectItem value='price:desc'>Price: Low to High</SelectItem>
							<SelectItem value='price:asc'>Price: High to low</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<Separator className='my-10' />

			<div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 xl:gap-x-12 xl:gap-y-16 xl:grid-cols-3 '>
				{products.map((product) => (
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

export default ProductsPage;
