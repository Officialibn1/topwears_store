"use client";
import React from "react";
import { Button } from "./button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";
import { CartItem } from "@/typings";

const AddToCartButton = ({
	name,
	description,
	price,
	currency,
	image,
	product_id,
}: CartItem) => {
	const { addItem } = useShoppingCart();

	const item = {
		name,
		description,
		price,
		currency,
		image: urlFor(image).url(),
		id: product_id,
	};
	return (
		<Button
			className='flex gap-1'
			onClick={() => addItem(item)}>
			<span>Add to Cart</span>

			<ShoppingBag />
		</Button>
	);
};

export default AddToCartButton;
