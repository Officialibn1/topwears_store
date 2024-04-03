import React from "react";

type Props = {
	children: React.ReactNode;
};

export const container = `lg:w-[768px] lg:mx-auto  xl:w-[1224px]  py-14 px-10`;

export const productContainer = `lg:w-full lg:mx-auto  xl:w-[1224px]  py-14 px-10`;

const Container = ({ children }: Props) => {
	return (
		<div className='lg:max-w-screen-md lg:mx-auto  xl:max-w-screen-lg py-14 px-10'>
			{children}
		</div>
	);
};

export default Container;
