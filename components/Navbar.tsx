"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

import { Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import ShoppingCartModal from "./ShoppingCartModal";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCategory } from "@/typings";
import { client } from "@/lib/sanity";

type Props = {};

const navbarLinks: { name: string; url: string }[] = [
	{
		name: "Products",
		url: "/products",
	},
	{
		name: "Our Brands",
		url: "/our_brands",
	},
	{
		name: "About Us",
		url: "/about",
	},
];

const categoryLinks: { name: string; url: string }[] = [
	{
		name: "Men",
		url: "/Categories/Men",
	},
	{
		name: "Women",
		url: "/Categories/Women",
	},
	{
		name: "Shoes",
		url: "/Categories/Shoes",
	},

	{
		name: "Kids",
		url: "/Categories/Kids",
	},
];

const Navbar = (props: Props) => {
	const pathname = usePathname();

	const [categories, setCategories] = useState<ProductCategory[]>([]);

	const { theme, setTheme } = useTheme();

	const { cartCount, handleCartClick } = useShoppingCart();

	useEffect(() => {
		const fetchCategories = async () => {
			const query = `*[_type == 'category'] {
								_id,
								name,
							}`;

			const data = await client.fetch(query);

			const categoryList: ProductCategory[] = await data.result;

			setCategories(categoryList);

			console.log("Category List", data.result);
		};

		// fetchCategories();
	}, []);
	return (
		<div className=' flex items-center py-4 px-8 md:px-12 lg:px-24 justify-between fixed top-0 left-0 shadow-lg w-full bg-background z-40'>
			<Link href={"/"}>
				<Avatar className='w-16 h-16 lg:w-24 lg:h-24  shadow-md'>
					<Image
						className='w-full h-full'
						width={180}
						height={180}
						alt='Store Logo'
						src='/Logo1.png'
					/>
					<AvatarFallback>Shop</AvatarFallback>
				</Avatar>
			</Link>

			<div className='hidden lg:flex items-center gap-4'>
				<Button
					variant={pathname === "/" ? "default" : "outline"}
					size={"sm"}
					asChild>
					<Link href={"/"}>{"Home"}</Link>
				</Button>

				<Menubar>
					<MenubarMenu>
						<MenubarTrigger>Categories</MenubarTrigger>
						<MenubarContent>
							{categoryLinks?.map((category) => (
								<div
									className='flex flex-col w-full'
									key={category.name}>
									<MenubarItem asChild>
										<Link href={category.url}>{category.name}</Link>
									</MenubarItem>
									<MenubarSeparator />
								</div>
							))}
							<div className='flex flex-col w-full'>
								<MenubarItem asChild>
									<Link href={"/products"}>View All</Link>
								</MenubarItem>
								<MenubarSeparator />
							</div>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>

				{navbarLinks.map((link, i) => (
					<Button
						variant={pathname === link.url ? "default" : "outline"}
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
					onClick={() => handleCartClick()}
					className='relative'
					variant={"outline"}
					size={"icon"}>
					<ShoppingCart className='w-4 lg:w-6 h-4 lg:h-6' />

					<span className='text-sm font-semibold absolute -top-3 -right-2 bg-foreground text-background rounded-full p-1 h-6 w-6 flex items-center justify-center'>
						{cartCount}
					</span>
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
