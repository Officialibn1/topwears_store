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
	images: ProductImage[];
	category_name: string;
	description: string;
}
