import { container } from "@/components/ui/container";
import React from "react";

import { client, urlFor } from "@/lib/sanity";
import { BrandInterface } from "@/typings";
import Image from "next/image";

const fetchbrands = async () => {
	const query = `*[_type == 'brands'] {
        _id,
		name,
        logo,
        
      }`;

	const data: BrandInterface[] = await client.fetch(query);

	return data;
};
type Props = {};

const OurBrands = async (props: Props) => {
	const brands: BrandInterface[] = await fetchbrands();

	return (
		<div className={`${container} mt-40  `}>
			<h1 className='text-5xl font-semibold text-center'>Our Brands</h1>

			<div className='flex flex-wrap gap-10 mt-24 justify-center'>
				{brands.map((brand, idx) => (
					<div
						key={brand._id}
						className='relative rounded-lg border w-[250px] h-[250px]  overflow-hidden cursor-pointer hover:shadow-md duration-150'>
						<div className='w-full h-full overflow-hidden rounded-t-lg  group-hover:opacity-75'>
							<Image
								src={urlFor(brand.logo).url()}
								width={130}
								height={130}
								alt={brand.name}
								className='w-full h-full'
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurBrands;
