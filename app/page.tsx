import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewProductsSection from "@/components/NewProductsSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import ShoppingCartModal from "@/components/ShoppingCartModal";
import Image from "next/image";

export default function Home() {
	return (
		<div className='flex flex-col gap-20'>
			<Hero />

			<NewProductsSection />

			<PopularProductsSection />
		</div>
	);
}
