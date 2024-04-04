# TOP WEARS ECOMMERCE STORE

## A place where you can find all your top brands at affordable price and great logistics.

> This project is a personal projects but have been used as a starting template for lot's of my clients.


## The project depends on the following to function properly

> Clone the repo using 
```bash
    git clone https://github.com/Officialibn1/topwears_store.git
```

> Install all dependencies using 
```bash
    npm install
```

> Replace this line with your sanity project ID in sanity.config.ts file
```javascript

    export default defineConfig({
    name: 'default',
    title: 'cn_wears_cms', //Replace with your project title

    projectId: 'ql3jlmao', //Replace with your project ID
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
    })

```

> Create a .env file with this line of environment variable
```env
    NEXT_PUBLIC_STRIPE_KEY=   // Stripe public key
```

> This is the only place the environment variable is used [ShoppingCartProvider.tsx]
```javascript
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
                successUrl='https://topwears-store.vercel.app/Stripe/Success'
                cancelUrl='https://topwears-store.vercel.app/Stripe/Error'>
                {children}
            </CartProvider>
        );
    };

    export default ShoppingCartProvider;

```

