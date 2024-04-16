import BrandsSection from "@/components/BrandsSection";
import Hero from "@/components/Hero";
import NewProductsSection from "@/components/NewProductsSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import SubscribeToNewsletter from "@/components/SubscribeToNewsletter";

export default function Home() {
	return (
		<div className='flex flex-col gap-20'>
			<Hero />

			<NewProductsSection />

			<PopularProductsSection />

			<SubscribeToNewsletter />

			<BrandsSection />
		</div>
	);
}
