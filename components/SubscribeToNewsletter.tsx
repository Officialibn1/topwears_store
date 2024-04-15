import React from "react";
import { container } from "./ui/container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

const SubscribeToNewsletter = (props: Props) => {
	return (
		<div
			className={` py-14 px-5 sm:px-10 shadow-lg bg-gradient-to-tl from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-400`}>
			<h1 className=' text-background text-lg sm:text-2xl font-bold lg:text-3xl text-center'>
				Subscribe to Our Newsletter
			</h1>

			<div className='  mx-auto mt-8 flex flex-col sm:flex-row gap-5 w-full max-w-sm items-center space-x-2'>
				<Input
					type='email'
					placeholder='Email'
					className='bg-foreground text-background'
				/>
				<Button
					type='submit'
					className='mx-auto bg-background text-foreground hover:text-background'>
					Subscribe
				</Button>
			</div>
		</div>
	);
};

export default SubscribeToNewsletter;
