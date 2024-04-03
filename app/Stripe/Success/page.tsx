"use client";
import { Button } from "@/components/ui/button";
import { container } from "@/components/ui/container";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

import OrderSuccess from "@/public/OrderSuccess.json";

const CheckoutSuccessPage = () => {
	return (
		<div className={`${container} mt-40 flex flex-col gap-5 items-center`}>
			<div className='w-80 h-80 '>
				<Lottie
					animationData={OrderSuccess}
					loop={true}
				/>
			</div>

			<h1 className='text-center text-2xl font-semibold leading-relaxed tracking-wide'>
				Your order was successful!
			</h1>

			<Button className='bg-green-500 text-green-800 hover:bg-green-500/75'>
				<Link href={"/"}>Continue Shopping</Link>
			</Button>
		</div>
	);
};

export default CheckoutSuccessPage;
