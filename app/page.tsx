import Hero from "@/components/Hero";
import NewProductsSection from "@/components/NewProductsSection";
import Image from "next/image";

export default function Home() {
	return (
		<div className='flex flex-col gap-20'>
			<Hero />

			<NewProductsSection />
		</div>
	);
}
