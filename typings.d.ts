export interface Product {
	_id: string;
	name: string;
	price: number;
	slug: string;
	categoryName: string;
	imageUrl: string;
}

interface ProductImage {
	_type: string;
	_key: string;
	asset: any;
}

export interface FullProduct {
	slug: string;
	_id: string;
	name: string;
	price: number;
	discount: number;
	images: ProductImage[];
	category_name: string;
	description: string;
	stripe_price_id: string;
}

export type CartItem = {
	name: string;
	description: string;
	price: number;
	currency: string;
	image: any;
	product_id: string;
	price_id: string;
};

export type ProductCategory = {
	_id: string;
	name: string;
};

export interface BrandInterface {
	_id: string;
	name: string;
	logo: any;
}
