import { PlayIcon } from "@/components/ui/icons";
import AboutUsImage from "@/public/about-us.jpg";
import PartyImage from "@/public/party.jpg";

import Image from "next/image";
import { ServicesSwiper } from "./service-swiper";
import { Section } from "@/components/section";
import { ProjectsSwiper } from "./projects-swiper";

export default function Home() {
	return (
		<div className="">
			<section className="relative w-full h-screen">
				<Image src={PartyImage} alt="party" className="w-full h-full object-cover" />
				<div className="absolute inset-0 grid place-items-center">
					<PlayIcon className="h-16 w-16 z-10" />
				</div>
			</section>

			<section className="relative">
				<Image
					src={AboutUsImage}
					alt="about us"
					className="!absolute object-cover blur-lg opacity-30 -z-10 inset-x-0 w-full h-full"
				/>

				<div className="flex flex-col-reverse items-start lg:flex-col lg:items-center p-8">
					<div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-14 lg:mt-40">
						<h1 className="font-semibold text-5xl md:text-7xl lg:text-[80px]">About Us</h1>
						<h1 className="text-6xl sm:text-7xl text-transparent stroke-white [-webkit-text-stroke-color:#FFFFFF16;] [-webkit-text-stroke-width:1px;] lg:hidden">
							Al Waseet
						</h1>

						<p className="font-light max-w-3xl leading-loose text-lg">
							Al Waseet is dedicated to enhancing the well-being of residents, visitors, and business owners in Saudi Arabia
							and Dubai. We not only provide top-notch security services but also offer a comprehensive range of additional
							services such as crowd management as well as valet & car parking services. These services are meticulously
							designed to contribute to a safe and comfortable environment in both regions.
						</p>
					</div>

					<h1 className="hidden lg:block text-[250px] text-transparent stroke-white [-webkit-text-stroke-color:#FFFFFF16;] [-webkit-text-stroke-width:1px;]">
						Al Waseet
					</h1>
				</div>
			</section>

			<Section title="Our Primary Services" description="We always provide the best possible solutions">
				<ServicesSwiper />
			</Section>

			<Section title="Our Projects" description="Discover Our Highlights">
				<ProjectsSwiper />
			</Section>
		</div>
	);
}
