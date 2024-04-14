"use client";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
	images: any[];
	discount: number;
};

const ProductImageGallery = ({ images, discount }: Props) => {
	const [mainImage, setMainImage] = useState(images[0]);

	return (
		<div className='grid grid-cols-4 gap-5  md:col-span-2'>
			<div className='flex flex-col gap-4'>
				{images.map((image: any, index) => (
					<div
						className='w-full flex-1  bg-foreground/20 rounded-lg overflow-hidden shadow-lg hover:shadow-sm'
						key={image.asset._ref + index}>
						<Image
							onMouseEnter={() => setMainImage(image)}
							src={urlFor(image).url()}
							width={200}
							height={300}
							className='w-full h-full object-cover object-center cursor-pointer'
							alt={image.asset._ref}
						/>
					</div>
				))}
			</div>

			<div className='w-full relative h-full overflow-hidden my-auto rounded-lg shadow-lg col-span-3 bg-foreground/30 lg:max-h-[574.05px] xl:max-h-[699.12px]'>
				<Image
					className='w-full h-full object-cover object-center'
					src={urlFor(mainImage).url()}
					width={350}
					height={600}
					alt={mainImage._key}
				/>

				{discount && (
					<span className='absolute top-0 right-0 bg-green-400/60 text-green-800 px-2 py-1 rounded-es-lg text-sm'>
						Discount: -{discount}%
					</span>
				)}
			</div>
		</div>
	);
};

export default ProductImageGallery;
