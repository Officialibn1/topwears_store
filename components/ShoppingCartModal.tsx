"use client";
import React from "react";

import Lottie from "lottie-react";

import EmptyCart from "@/public/EmptyCart.json";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { CartItem } from "@/typings";
import Image from "next/image";
import { Trash } from "lucide-react";

type Props = {};

const ShoppingCartModal = (props: Props) => {
	const { shouldDisplayCart, handleCartClick, cartCount, cartDetails } =
		useShoppingCart();
	return (
		<Sheet
			open={shouldDisplayCart}
			onOpenChange={() => handleCartClick()}>
			<SheetContent className='outline flex flex-col'>
				<SheetHeader>
					<SheetTitle className='text-2xl'>Cart Items</SheetTitle>
				</SheetHeader>

				<div className='flex-1 my-10 '>
					{!cartCount ? (
						<div className='flex flex-col gap-3 p-5'>
							<Lottie
								animationData={EmptyCart}
								loop={true}
							/>

							<h1 className='text-center text-red-400 text-2xl font-semibold leading-relaxed tracking-wide'>
								Empty Cart!!
							</h1>
						</div>
					) : (
						<div className='flex flex-col gap-2 overflow-y-auto'>
							{Object.values(cartDetails ?? {}).map((item) => (
								<div
									key={item.id}
									className='flex gap-3 border rounded-lg overflow-hidden'>
									<div className='flex w-fit  aspect-square rounded-s-lg overflow-hidden'>
										<Image
											src={item.image as string}
											width={100}
											height={100}
											className='items-center object-fill object-center'
											alt={item.name}
										/>
									</div>

									<div className='flex flex-col gap-1 flex-1 py-2 pr-2'>
										<h1 className='text-lg font-semibold'>{item.name}</h1>
										<div className='flex justify-between items-end gap-2'>
											<div>
												<h3 className='text-base font-light'>${item.price}</h3>
												<h3 className='text-base font-semibold'>
													Quantity: {item.quantity}
												</h3>
											</div>

											<Button
												size={"icon"}
												variant={"destructive"}>
												<Trash className='w-5 h-5' />
											</Button>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				<SheetFooter>
					<SheetClose asChild>
						<Button
							disabled={!cartCount ? true : false}
							type='submit'>
							Proceed to Checkout
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default ShoppingCartModal;
