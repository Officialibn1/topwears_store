import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
	title: string;
	link?: string;
};

const SectionHeader = ({ link, title }: Props) => {
	return (
		<div className='w-full justify-between flex items-center mb-10'>
			<h1 className='text-2xl font-bold lg:text-3xl text-foreground'>
				{title}
			</h1>

			{link && (
				<Button
					asChild
					variant={"secondary"}
					size={"default"}
					className='flex gap-2 items-center'>
					<Link
						href={link}
						className='flex items-center gap-2'>
						<span>View All</span>

						<ArrowRight />
					</Link>
				</Button>
			)}
		</div>
	);
};

export default SectionHeader;
