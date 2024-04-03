import ProductImageGallery from "@/components/ProductImageGallery";
import AddToCartButton from "@/components/ui/AddToCartButton";
import CheckOutButton from "@/components/ui/CheckOutButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { container, productContainer } from "@/components/ui/container";
import { client } from "@/lib/sanity";
import { FullProduct } from "@/typings";
import { ShoppingBag, Star, TruckIcon } from "lucide-react";
import React from "react";

type Props = {};

const fetchProductItem = async (slug: string) => {
	const query = `
			*[_type == 'product' && slug.current == '${slug}'][0] {
				_id,
				name,
				price,
				images,
				'category_name': category->name,
				description,
				'slug': slug.current
			}
	`;

	const response = await client.fetch(query);

	return response;
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
	const product: FullProduct = await fetchProductItem(params.slug);

	return (
		<div className={`${productContainer} outline flex flex-col gap-20`}>
			<div className={`mt-40 grid grid-cols-1 md:grid-cols-3 gap-8`}>
				<ProductImageGallery images={product.images} />
				<div className='flex flex-col gap-3'>
					<h1 className='text-3xl font-semibold'>{product.name}</h1>

					<div className='flex items-center gap-3'>
						<h3 className='text-lg font-bold'>${product.price}</h3>

						<span className='text-lg font-medium line-through text-red-400'>
							${product.price + product.price / 5}
						</span>
					</div>

					<div className='flex items-center gap-3'>
						<Badge
							className='flex w-fit items-center gap-1'
							variant={"outline"}>
							<span className='text-sm'>4.5</span>
							<Star className='w-4 h-4' />
						</Badge>

						<span className='text-sm'>65 ratings.</span>
					</div>

					<div className='flex items-center gap-3'>
						<span className='text-sm'>Category: </span>
						<Badge className='w-fit'>{product.category_name}</Badge>
					</div>

					<div className='flex items-center my-4 gap-3'>
						<TruckIcon />
						<span className='text-sm'>2 - 4 Days Shipping.</span>
					</div>

					<div className='flex gap-8  items-center md:flex-col md:items-start md:gap-4 lg:flex-row '>
						<AddToCartButton
							name={product.name}
							currency='USD'
							description={product.description}
							price={product.price}
							image={product.images[0]}
							key={product._id}
							product_id={product._id}
						/>

						<CheckOutButton />
					</div>

					<div className='p-2 h-40 xl:h-fit xl:mt-10 overflow-y-auto border rounded-md'>
						<p className='text-sm font-light leading-relaxed tracking-wide'>
							{product.description}
						</p>
					</div>
				</div>
			</div>

			<SectionHeader title='Similar Products' />
		</div>
	);
};

export default ProductPage;
