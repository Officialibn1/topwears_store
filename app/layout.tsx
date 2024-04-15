import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/providers/theme_provider";
import ShoppingCartProvider from "@/providers/ShoppingCartProvider";
import ShoppingCartModal from "@/components/ShoppingCartModal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Top Wears Store",
	description: "Best online store to find all your top wears",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeProvider
					enableSystem
					attribute='class'
					defaultTheme='light'>
					<ShoppingCartProvider>
						<Navbar />

						<ShoppingCartModal />

						{children}

						<Toaster />

						<Footer />
					</ShoppingCartProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
