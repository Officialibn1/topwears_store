"use client";
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	return (
		<CartProvider
			currency='USD'
			mode='payment'
			cartMode='client-only'
			shouldPersist
			language='en-US'
			billingAddressCollection
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
			successUrl=''
			cancelUrl=''>
			{children}
		</CartProvider>
	);
};

export default ShoppingCartProvider;
