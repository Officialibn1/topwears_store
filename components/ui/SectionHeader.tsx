import React from "react";
import { Button } from "./button";
import Link from "next/link";

type Props = {
	title: string;
	link: string;
};

const SectionHeader = ({ link, title }: Props) => {
	return (
		<div className='w-full justify-between items-center'>
			<h1 className='text-2xl font-bold'>{title}</h1>

			<Button asChild>
				<Link href={link}>View All</Link>
			</Button>
		</div>
	);
};

export default SectionHeader;
