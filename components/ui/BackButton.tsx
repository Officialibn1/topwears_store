"use client";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { ChevronsLeft } from "lucide-react";

type Props = {};

const BackButton = (props: Props) => {
	return (
		<Button
			asChild
			variant={"outline"}>
			<Link
				href={""}
				onClick={() => {
					window.history.back();
				}}
				className='flex items-center gap-2 w-fit'>
				<ChevronsLeft /> Go Back
			</Link>
		</Button>
	);
};

export default BackButton;
