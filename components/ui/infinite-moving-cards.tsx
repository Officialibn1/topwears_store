"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Badge } from "./badge";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: Product[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards",
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse",
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}>
				{items.map((product, idx) => (
					<Link
						href={`/Product/${product.slug}`}
						key={product._id}
						className='group relative rounded-lg border overflow-hidden'>
						<div className='w-full h-4/5 overflow-hidden rounded-t-lg bg-foreground/20 group-hover:opacity-75'>
							<Image
								src={product.imageUrl}
								width={300}
								height={300}
								alt={product.slug}
								className='w-full h-full object-cover object-center'
							/>
						</div>

						<div className='flex flex-col justify-between h-1/5 px-4 py-4'>
							<div className='flex justify-between items-center'>
								<h1>{product.name}</h1>

								<h3>${product.price}</h3>
							</div>

							<Badge
								variant='secondary'
								className='w-fit'>
								{product.categoryName}
							</Badge>
						</div>
					</Link>
				))}
			</ul>
		</div>
	);
};
