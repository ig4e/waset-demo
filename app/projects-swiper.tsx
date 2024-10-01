"use client";
import { projectsSwiper } from "@/config/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { BluePlayIcon } from "@/components/ui/icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import "swiper/css/pagination";

export function ProjectsSwiper() {
	const [activeIndex, setActiveIndex] = useState(1);

	return (
		<div className="flex items-center gap-8 relative px-4">
			<Swiper
				autoplay
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
				}}
				slidesPerView={3}
				spaceBetween={0}
				centeredSlides={true}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				pagination={{
					clickable: true,
					enabled: true,
					bulletActiveClass: "bullet-active-swiper",
					el: "#swiper-pages",
				}}
				rewind
				navigation={{
					enabled: true,
					nextEl: "#slide-next",
					prevEl: "#slide-prev",
				}}
				keyboard
				a11y={{ enabled: true }}
				modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
				initialSlide={activeIndex}
			>
				{projectsSwiper.map((item, index) => (
					<SwiperSlide
						key={index}
						style={{
							zIndex: activeIndex === index ? 50 : 1,
						}}
					>
						{({ isActive }) => (
							<div
								className={cn(
									"h-full w-auto aspect-[363/476] lg:aspect-[886/464] transition-all duration-300 lg:-mx-16 relative",
									{
										"lg:scale-75 grayscale": !isActive,
									},
								)}
							>
								<Image
									src={item.image}
									alt={item.title}
									className={cn("w-full h-full object-cover object-center rounded-3xl lg:rounded-2xl", {
										"blur-[2px]": isActive,
									})}
								/>

								<div
									className={cn(
										"absolute inset-0 grid place-items-center opacity-0 pointer-events-none transition-opacity z-20",
										{
											"opacity-100 pointer-events-auto": isActive,
										},
									)}
								>
									<div className="bg-[#002F87] w-16 h-16 rounded-full blur-md" />
									<div className="absolute inset-0 grid place-items-center">
										<BluePlayIcon className="w-6 h-6" />
									</div>
								</div>

								<div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-black text-start flex justify-end items-start flex-col rounded-3xl lg:rounded-2xl">
									<div className="p-4 space-y-2">
										<h3 className="text-2xl">{item.title}</h3>
										<p className="text-xl">{item.description}</p>
									</div>
								</div>
							</div>
						)}
					</SwiperSlide>
				))}

				<div id="swiper-pages" className="mt-8"></div>

				<div className="flex items-center gap-5 lg:gap-10 justify-center mt-8">
					<button
						id="slide-prev"
						className="max-h-fit rounded-full border border-white p-2 transition hover:bg-white/25 active:bg-white/20"
					>
						<ChevronLeftIcon className="h-5 w-5 text-white "></ChevronLeftIcon>
					</button>

					<button
						id="slide-next"
						className="max-h-fit rounded-full border border-white p-2 transition hover:bg-white/25 active:bg-white/20"
					>
						<ChevronRightIcon className="h-5 w-5 text-white"></ChevronRightIcon>
					</button>
				</div>
			</Swiper>
		</div>
	);
}
