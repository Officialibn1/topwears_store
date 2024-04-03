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
			successUrl='http://localhost:3000/Stripe/Success'
			cancelUrl='http://localhost:3000/Stripe/Error'>
			{children}
		</CartProvider>
	);
};

export default ShoppingCartProvider;
