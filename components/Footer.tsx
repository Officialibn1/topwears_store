import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import {
	FaCcMastercard,
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaXTwitter,
} from "react-icons/fa6";

import { RiVisaFill } from "react-icons/ri";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className='text-background mt-36 py-10 px-8 md:px-12 lg:px-24 lg:py-24  outline w-full  bg-gradient-to-tl from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-400'>
			<div className='flex flex-col  sm:flex-row lg:gap-20 gap-10'>
				<Avatar className='w-24 h-24  shadow-md'>
					<Image
						className='w-full h-full'
						width={180}
						height={180}
						alt='Store Logo'
						src='/Logo1.png'
					/>
					<AvatarFallback>Shop</AvatarFallback>
				</Avatar>

				<ul className='flex flex-col gap-1 leading-relaxed tracking-wide'>
					<li>
						<h1 className='text-lg mb-2 font-semibold'>CATEGORIES</h1>
					</li>

					<li>
						<Link href={"#"}>Drips</Link>
					</li>

					<li>
						<Link href={"#"}>Men Wears</Link>
					</li>

					<li>
						<Link href={"#"}>Women Wears</Link>
					</li>

					<li>
						<Link href={"#"}>Summer Wears</Link>
					</li>
				</ul>

				<ul className='flex flex-col gap-1 leading-relaxed tracking-wide'>
					<li>
						<h1 className='text-lg mb-2 font-semibold'>USEFULL LINKS</h1>
					</li>

					<li>
						<Link href={"#"}>Chat with Us</Link>
					</li>

					<li>
						<Link href={"#"}>Contact Us</Link>
					</li>

					<li>
						<Link href={"/request_product"}>Request a Product</Link>
					</li>
				</ul>

				<ul className='flex flex-col gap-1 leading-relaxed tracking-wide'>
					<li>
						<h1 className='text-lg mb-2 font-semibold'>ABOUT ONLINE SHOP</h1>
					</li>

					<li>
						<Link href={"#"}>About Us</Link>
					</li>

					<li>
						<Link href={"#"}>Terms and Conditions</Link>
					</li>

					<li>
						<Link href={"#"}>Our Brands</Link>
					</li>
				</ul>
			</div>

			<div className='flex flex-col sm:flex-row sm:justify-between gap-8 mt-10 lg:mt-20'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-base font-semibold leading-relaxed tracking-wide'>
						FOLLOW & CONTACT US ON
					</h1>
					<ul className='flex gap-6 items-center'>
						<li>
							<Link href={"#"}>
								<Button
									className='p-1'
									variant={"secondary"}>
									<FaInstagram className='w-8 h-8' />
								</Button>
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<Button
									className='p-1'
									variant={"secondary"}>
									<FaFacebookF className='w-7 h-7' />
								</Button>
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<Button
									className='p-1'
									variant={"secondary"}>
									<FaXTwitter className='w-8 h-8' />
								</Button>
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<Button
									className='p-1'
									variant={"secondary"}>
									<FaWhatsapp className='w-8 h-8' />
								</Button>
							</Link>
						</li>
					</ul>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='text-base font-semibold leading-relaxed tracking-wide'>
						PAYMENT METHODS
					</h1>
					<ul className='flex gap-6 items-center'>
						<li>
							<Button
								className='p-1 text-foreground'
								variant={"outline"}>
								<FaCcMastercard className='w-8 h-8' />
							</Button>
						</li>
						<li>
							<Button
								className='p-1 text-foreground'
								variant={"outline"}>
								<RiVisaFill className='w-8 h-8' />
							</Button>
						</li>
						<li>
							<Button
								className='p-1 text-foreground'
								variant={"outline"}>
								<h3 className='font-semibold'>Verve</h3>
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
