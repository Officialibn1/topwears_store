"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

import { Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {};

const navbarLinks: { name: string; url: string }[] = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "Men",
		url: "/Men",
	},
	{
		name: "Women",
		url: "/Women",
	},
	{
		name: "Teenage",
		url: "/Teenage",
	},
	{
		name: "Fashion",
		url: "/Fashion",
	},
];

const Navbar = (props: Props) => {
	const pathname = usePathname();

	const { theme, setTheme } = useTheme();
	return (
		<div className=' flex items-center py-4 px-8 md:px-12 lg:px-24 justify-between fixed top-0 left-0 shadow-lg w-full bg-background'>
			<Avatar className='w-16 h-16 lg:w-24 lg:h-24  shadow-md'>
				<Image
					className='w-full h-full'
					width={180}
					height={180}
					alt='Store Logo'
					src='/Logo1.png'
				/>
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			<div className='hidden lg:flex items-center gap-4'>
				{navbarLinks.map((link, i) => (
					<Button
						variant={pathname === link.url ? "default" : "ghost"}
						size={"sm"}
						key={i}
						asChild>
						<Link href={link.url}>{link.name}</Link>
					</Button>
				))}
			</div>

			<div className='flex gap-3 items-center'>
				<Button
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					size={"icon"}>
					<Moon className='w-4 lg:w-6 h-4 lg:h-6 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all' />

					<Sun className='w-4 lg:w-6 h-4 lg:h-6 absolute rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all' />
				</Button>

				<Button
					variant={"outline"}
					size={"icon"}>
					<ShoppingCart className='w-4 lg:w-6 h-4 lg:h-6' />
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
