"use client";

import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { BrandInterface } from "@/typings";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BrandMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: BrandInterface[];
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
				"scroller relative z-20  max-w-7xl overflow-hidden  ",
				className,
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}>
				{items.map((brand, idx) => (
					<div
						key={brand._id}
						className='relative rounded-lg border w-[150px] h-[150px]  overflow-hidden cursor-pointer hover:shadow-md duration-150'>
						<div className='w-full h-full overflow-hidden rounded-t-lg  group-hover:opacity-75'>
							<Image
								src={urlFor(brand.logo).url()}
								width={130}
								height={130}
								alt={brand.name}
								className='w-full h-full'
							/>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default BrandMovingCards;
