import { container } from "@/components/ui/container";
import React from "react";

type Props = {};

const ProductsPage = (props: Props) => {
	return (
		<div className={`${container} mt-40  `}>
			<h1 className='text-5xl font-semibold text-center'>ProductsPage</h1>
		</div>
	);
};

export default ProductsPage;
