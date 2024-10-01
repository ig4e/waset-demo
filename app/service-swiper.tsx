"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { servicesSwiper } from "@/config/services";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

export function ServicesSwiper() {
	const [currnetSlide, setCurrentSlideIndex] = useState<number>(0);
	const [swiper, setSwiper] = useState<SwiperType | null>(null);

	const currnetService = useMemo(() => {
		return servicesSwiper[currnetSlide];
	}, [currnetSlide]);

	const setCurrentSlide = useCallback(
		(index: number) => {
			swiper?.slideTo(index);
			setCurrentSlideIndex(index);
		},
		[swiper],
	);

	return (
		<div className="relative">
			<AnimatePresence initial={false} custom={currnetSlide}>
				<motion.img
					key={currnetSlide}
					src={currnetService.image.src}
					className="!absolute object-cover blur-sm -z-20 inset-x-0 w-full h-full"
					initial={{
						opacity: 0.5,
					}}
					animate={{
						opacity: 1,
					}}
				/>
			</AnimatePresence>

			{/* <Image src={currnetService.image} alt="about us" className="!absolute object-cover blur-sm -z-20 inset-x-0 w-full h-full" /> */}
			<div className="absolute -z-10 inset-0 -bottom-1.5 bg-gradient-to-b from-transparent to-black" />

			<div className="flex lg:items-center flex-col-reverse lg:flex-row gap-10 pb-10 pt-10 lg:pt-40 px-6">
				<div className="lg:ps-12">
					<div className="flex items-center gap-16">
						<div className="flex-col items-center hidden lg:flex">
							<Stepper current={currnetSlide} setCurrent={setCurrentSlide} steps={servicesSwiper.length} />
						</div>

						<div className="flex flex-col justify-between">
							<div className="text-start space-y-7 mt-auto">
								<h1 className="text-5xl font-bold text-white text-balance max-w-md">{currnetService.title}</h1>
								<p className="text-white max-w-md lg:min-w-[28rem] text-balance">{currnetService.description}</p>
							</div>

							<Button className="!border-white text-white rounded-md hover:bg-white/10 mt-12 w-fit px-6" variant={"outline"}>
								An Offer
							</Button>
						</div>
					</div>
				</div>

				<div className="w-full flex gap-4 overflow-hidden rounded-lg max-h-[500px]">
					<div className="lg:hidden -px-3 mx-3">
						<Stepper current={currnetSlide} setCurrent={setCurrentSlide} steps={servicesSwiper.length} />
					</div>

					<Swiper
						autoplay
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 16,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 16,
							},
						}}
						slidesPerView={3}
						spaceBetween={32}
						onSlideChangeTransitionEnd={(swiper) => {
							setCurrentSlideIndex(swiper.realIndex);
						}}
						onSwiper={(swiper) => setSwiper(swiper)}
						centeredSlides={true}
						loop
						pagination={{
							clickable: true,
							enabled: true,
							bulletActiveClass: "bullet-active-swiper",
							el: "#swiper-pages",
						}}
						navigation={{
							enabled: true,
							nextEl: "#slide-next",
							prevEl: "#slide-prev",
						}}
						keyboard
						a11y={{ enabled: true }}
						modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
					>
						{servicesSwiper.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="h-full w-auto lg:aspect-[350/500] relative">
									<Image
										src={item.image}
										alt={item.title}
										className="w-full h-full object-cover object-center rounded-lg"
									/>

									<div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-black text-start flex justify-end items-start flex-col rounded-lg">
										<div className="px-6 py-4">
											<h3
												className="text-2xl uppercase"
												dangerouslySetInnerHTML={{ __html: item.title.replaceAll("\n", "<br/>") }}
											></h3>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="hidden lg:flex items-center justify-between mt-8 pb-8 px-16">
				<div className="flex items-center gap-4">
					<button id="slide-prev" className="rounded-full p-2 transition hover:bg-white/25 active:bg-white/20">
						<ArrowLeftIcon className="h-8 text-white "></ArrowLeftIcon>
					</button>

					<button id="slide-next" className="rounded-full p-2 transition hover:bg-white/25 active:bg-white/20">
						<ArrowRightIcon className="h-8 text-white"></ArrowRightIcon>
					</button>
				</div>

				<div className="flex items-center gap-4">
					<p>{currnetSlide + 1}</p>

					<Progress value={((currnetSlide + 1) / servicesSwiper.length) * 100} className="w-20 h-1" />

					<p>{servicesSwiper.length}</p>
				</div>
			</div>
		</div>
	);
}

function Stepper({ steps, current, setCurrent }: { steps: number; current: number; setCurrent: (value: number) => void }) {
	return (
		<div className="flex flex-col items-center">
			{Array.from({ length: steps }).map((_value, index) => {
				const isAtStart = index === 0;
				const isAtEnd = index === servicesSwiper.length - 1;

				return (
					<>
						<span
							className={cn("h-16 w-[1px] rounded-full", {
								"bg-gradient-to-b from-transparent to-white h-20": isAtStart,
								"bg-white": !isAtStart,
							})}
						/>
						<button
							onClick={() => setCurrent(index)}
							className={cn("p-[5px] rounded-full bg-[#001446] transition", {
								"ring-2 ring-white": index === current,
							})}
						>
							<div className="h-5 w-5 rounded-full bg-white" />
						</button>
						{isAtEnd && <span className="h-20 w-[1px] bg-gradient-to-b from-white via-white to-transparent rounded-full" />}
					</>
				);
			})}
		</div>
	);
}
