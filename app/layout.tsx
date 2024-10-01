import "swiper/css";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	preload: true,
});

export const metadata: Metadata = {
	title: "Al Waseet",
	description: `Al Waseet is dedicated to enhancing the well-being of residents, visitors,
and business owners in Saudi Arabia and Dubai. We not only provide
top-notch security services but also offer a comprehensive range of
additional services such as crowd management as well as valet & car
parking services. These services are meticulously designed to contribute
to a safe and comfortable environment in both regions.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased dark font-sans`}>
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
