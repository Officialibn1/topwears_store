import React from "react";

type Props = {};

const query = `*[_type == 'product'][0...3] {
    _id,
      name,
      'slug': slug.current,
      price,
      'categoryName': category->name,
      'imageUrl': images[0].asset->url
  }`;

const NewProductsSection = (props: Props) => {
	return <div>NewProductsSection</div>;
};

export default NewProductsSection;
