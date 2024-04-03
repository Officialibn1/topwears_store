"use client";
import React from "react";
import { Button } from "./button";
import { useShoppingCart } from "use-shopping-cart";
import { CartItem } from "@/typings";
import { urlFor } from "@/lib/sanity";

const CheckOutButton = ({
	name,
	description,
	price,
	currency,
	image,
	product_id,
	price_id,
}: CartItem) => {
	const { checkoutSingleItem } = useShoppingCart();

	const item = {
		name,
		description,
		price,
		currency,
		image: urlFor(image).url(),
		price_id,
	};
	return (
		<Button
			variant={"secondary"}
			onClick={() => checkoutSingleItem(price_id)}>
			Checkout Now
		</Button>
	);
};

export default CheckOutButton;
