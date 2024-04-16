import React from "react";
import BrandMovingCards from "@/components/ui/BrandMovingCards";

import { client } from "@/lib/sanity";
import { BrandInterface } from "@/typings";
import { container } from "./ui/container";

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

const BrandsSection = async (props: Props) => {
	const brands: BrandInterface[] = await fetchbrands();
	return (
		<div className={container}>
			<h1 className=' text-foreground text-3xl my-8 sm:text-5xl font-bold  text-center'>
				Our Brand&apos;s
			</h1>
			<BrandMovingCards
				speed='normal'
				items={brands}
			/>
		</div>
	);
};

export default BrandsSection;
