"use client";
import { container } from "@/components/ui/container";
import Lottie from "lottie-react";
import React from "react";

import OrderFailed from "@/public/OrderFailed.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CheckoutErrorPage = () => {
	return (
		<div className={`${container} mt-40 flex flex-col gap-5 items-center`}>
			<div className='w-80 h-80 '>
				<Lottie
					animationData={OrderFailed}
					loop={true}
				/>
			</div>

			<h1 className='text-center text-red-400 text-2xl font-semibold leading-relaxed tracking-wide'>
				Your order could not be completed!
			</h1>

			<Button className='bg-green-500 text-green-800 hover:bg-green-500/75'>
				<Link href={"/"}>Continue Shopping</Link>
			</Button>
		</div>
	);
};

export default CheckoutErrorPage;
