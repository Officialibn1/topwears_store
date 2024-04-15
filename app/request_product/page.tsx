import RequestProductSection from "@/components/RequestProductSection";
import { container } from "@/components/ui/container";
import React from "react";

type Props = {};

const RequestProductPage = (props: Props) => {
	return (
		<div className={`${container} mt-40  `}>
			<div className='mb-20'>
				<h1 className='text-5xl font-semibold text-center'>Request Product</h1>

				<p className='text-sm sm:text-base lg:text-lg lg:mt-7 font-light leading-relaxed text-foreground text-center'>
					Request a product that we don&apos;t current have in stock by filling
					the form below and our team will do their best to make the product
					available as soon as possible
				</p>
			</div>

			<RequestProductSection />
		</div>
	);
};

export default RequestProductPage;
