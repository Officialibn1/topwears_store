import { container } from "@/components/ui/container";
import React from "react";

const aboutContent: { title: string; paragraph: string }[] = [
	{
		title: "Level Up Your Look with Top-Tier Threads",
		paragraph:
			"Ditch the fashion faux pas and forget about feeling like a follower. At our store, we bring you clothing from the hottest brands, the trendsetters, the labels that make a statement. We're not just talking about logos – we're talking about quality, about styles that turn heads and make you feel confident.  Whether you're hitting the streets, the club, or the office, we've got the threads to transform your outfit from basic to brilliant.  So ditch the fashion frustration and browse our collection –  it's time to level up your look with the brands that bring the fire.",
	},
	{
		title: "Fresh Threads Delivered Straight to Your Door",
		paragraph:
			"Forget the mall madness and long lines.  We make shopping for those on-point looks easier than ever.  Our curated selection of top brands means you can browse the latest styles from the comfort of your couch.  Feeling indecisive? No problem!  Our detailed descriptions and high-quality photos will help you envision how each piece will fit and flatter.  Found the perfect outfit?  We offer fast and secure shipping, so you won't have to wait long to elevate your everyday style.",
	},
	{
		title: "Join the Crew: Look Good, Feel Good, Be You",
		paragraph:
			"We're more than just an online clothing store – we're a community of trendsetters and fashion enthusiasts.  Shopping with us means you're joining a crew that values expressing yourself through style.  We're here to help you find the perfect pieces to showcase your unique personality, no matter what your vibe.  So rock those bold colors, embrace those statement pieces, and let your inner fashion icon shine.  We'll be right here, bringing you the latest looks and the hottest brands to fuel your personal style journey.",
	},
];

const AboutUsPage = () => {
	return (
		<div className={`${container} mt-40  `}>
			{/* <h1 className='text-4xl md:text-5xl font-semibold text-center'>
				About Us
			</h1> */}

			<h1 className='mb-32  lg:leading-snug text-5xl xl:text-6xl xl:leading-[4rem] text-left leading-relaxed font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text'>
				We Bring You Clothing From Top Brands.
			</h1>

			{aboutContent.map((content, index) => (
				<div
					key={index}
					className='flex flex-col gap-3 mb-16'>
					<h1 className='text-2xl font-bold lg:text-3xl text-foreground'>
						{content.title}
					</h1>

					<p className='text-sm sm:text-base lg:text-lg lg:mt-7  font-light leading-loose text-foreground'>
						{content.paragraph}
					</p>
				</div>
			))}
		</div>
	);
};

export default AboutUsPage;
