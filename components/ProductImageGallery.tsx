"use client";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
	images: any[];
};

const ProductImageGallery = ({ images }: Props) => {
	const [mainImage, setMainImage] = useState(images[0]);

	return (
		<div className='grid grid-cols-4 gap-5  md:col-span-2'>
			<div className='flex flex-col gap-4'>
				{images.map((image: any, index) => (
					<div
						className='w-full flex-1  bg-foreground/20 rounded-lg overflow-hidden shadow-lg hover:shadow-sm'
						key={index}>
						<Image
							onMouseEnter={() => setMainImage(image)}
							src={urlFor(image).url()}
							width={200}
							height={300}
							className='w-full h-full object-cover object-center cursor-pointer'
							alt={image._key}
						/>
					</div>
				))}
			</div>

			<div className='w-full relative h-full overflow-hidden my-auto rounded-lg shadow-lg col-span-3 bg-foreground/30'>
				<Image
					className='w-full h-full object-cover object-center'
					src={urlFor(mainImage).url()}
					width={350}
					height={600}
					alt={mainImage._key}
				/>

				<span className='absolute top-0 right-0 bg-green-400/60 text-green-800 px-2 py-1 rounded-es-lg text-sm'>
					Discount: -40%
				</span>
			</div>
		</div>
	);
};

export default ProductImageGallery;
