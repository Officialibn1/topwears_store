import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { container } from "./ui/container";

type Props = {};

const heroImageQuery = `*[_type == 'hero_images'][0]`;
const fecthHeroImages = async () => {
	const images = await client.fetch(heroImageQuery);

	return images;
};

const Hero = async (props: Props) => {
	const heroImages = await fecthHeroImages();

	return (
		<div className={`flex flex-col gap-5  mt-40 lg:mt-60 ${container}`}>
			<div className='relative  flex flex-col sm:flex-row gap-10 w-full  sm:items-center'>
				<div className=' relative  w-fit '>
					<div className='-ml-3 sm:-ml-0 w-[200px] h-[246px] sm:w-[230px] sm:h-[282px]  xl:w-[300px] xl:h-[368px]  rounded-lg overflow-hidden '>
						<Image
							src={urlFor(heroImages.hero_image_one).url()}
							width={300}
							height={900}
							quality={100}
							priority
							alt='First Hero Image'
							className='w-full h-full'
						/>
					</div>

					<div className='w-[200px] h-[246px] sm:w-[230px] sm:h-[282px]  xl:w-[300px] xl:h-[368px] shadow-lg absolute -top-10 -right-32 xl:-right-52 rounded-lg overflow-hidden '>
						<Image
							src={urlFor(heroImages.hero_image_two).url()}
							width={300}
							height={900}
							quality={100}
							priority
							alt='Second Hero Image'
							className='w-full h-full'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-5  sm:w-1/2 lg:pl-10 xl:pl-0 sm:ml-auto'>
					<h1 className='lg:text-4xl lg:leading-snug text-3xl xl:text-6xl xl:leading-[4rem] sm:text-right leading-relaxed font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text'>
						Top Fashion Store For Your Best Clothing Brands.
					</h1>

					<p className='text-sm sm:text-base lg:text-lg lg:mt-7 sm:text-right font-light leading-relaxed text-foreground'>
						We only sell exclusive and high quality wears from the best brands.
					</p>
				</div>
			</div>

			<div className='flex  w-full justify-end mt-10'>
				{/* <div className='flex w-80 divide-x border rounded-lg overflow-hidden'>
					<Link
						href='/Men'
						className='flex-1 py-2 h-full items-center justify-center text-center bg-foreground/10 active:bg-foreground/20 hover:bg-foreground/20'>
						Men
					</Link>
					<Link
						href='/Men'
						className='flex-1 py-2  px-4 h-full items-center justify-center text-center bg-foreground/10 active:bg-foreground/20 hover:bg-foreground/20'>
						Women
					</Link>
					<Link
						href='/Men'
						className='flex-1 py-2  px-4 h-full items-center justify-center text-center bg-foreground/10 active:bg-foreground/20 hover:bg-foreground/20'>
						Teenage
					</Link>
				</div> */}

				<Button
					className='flex'
					variant={"outline"}
					asChild
					size={"lg"}>
					<Link
						href={"#new_products_section"}
						className='flex items-center gap-3'>
						<span>Shop Now </span>

						<ShoppingBag />
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Hero;
