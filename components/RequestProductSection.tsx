"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	productName: z.string().min(10, {
		message: "Product name must be at least 10 characters.",
	}),
	productDetails: z
		.string()
		.min(10, {
			message: "Product details must be at least 10 characters.",
		})
		.max(320, {
			message: "Product details must not be longer than 60 characters.",
		}),
	customerEmail: z.string().email().min(8, {
		message: "Enter a valid email.",
	}),
});
import React from "react";
import { container } from "./ui/container";

type Props = {};

const RequestProductSection = (props: Props) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			productName: "",
			productDetails: "",
		},
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<div
			className={`${container} rounded-md shadow-lg bg-gradient-to-tl from-slate-800 to-stone-900 dark:from-slate-100 dark:to-stone-400`}>
			<h1 className=' text-background text-2xl font-bold lg:text-3xl text-center'>
				Request Product
			</h1>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='w-fit space-y-6 mx-auto mt-5 flex flex-col '>
					<FormField
						control={form.control}
						name='productName'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-background '>Product Name</FormLabel>
								<FormControl>
									<Input
										className='bg-foreground text-background'
										placeholder='Nike AirMax'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='productDetails'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-background'>
									Product Details
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Tell us a little bit about the product'
										className='bg-foreground text-background'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='customerEmail'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-background '>Your Email</FormLabel>
								<FormControl>
									<Input
										className='bg-foreground text-background'
										{...field}
									/>
								</FormControl>
								<FormDescription>
									We will contact you using this email as soon as the product
									becomes available
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						// variant={"ghost"}
						className='mx-auto bg-background text-foreground hover:text-background'>
						Request
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default RequestProductSection;
