import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import socioextrategico from '../../assets/socio.png'
import farmastack from '../../assets/farmaStack.png'
import countries from '../../assets/countries.png'
import anime from '../../assets/Anime.png'
import dbz from '../../assets/dbz.png'
import marvel from '../../assets/marvel.png'
import rick from '../../assets/rick_y_morty.png'
import soap from '../../assets/soapPet.jpg'

export default function App() {
	return (
		<section>
			<div
				className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
			>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div
						className="relative overflow-hidden rounded-lg sm:h-80 lg:order-last"
					>

						<Swiper
							effect={"coverflow"}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={"auto"}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={true}
							modules={[EffectCoverflow, Pagination]}
							className="mySwiper"
						>
							<SwiperSlide>
								<div className="relative">
									<img src={socioextrategico} alt="Socioextrategico" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Socioextrategico
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={farmastack} alt="farmastack" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Farmastack
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={countries} alt="countries" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Countries
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={anime} alt="anime" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Anime
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={dbz} alt="Dragon Ball" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Dragon Ball
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={marvel} alt="marvel" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Marvel
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={rick} alt="Rick and Morty" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Rick and Morty
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img src={soap} alt="Soap & Pet" />
									<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
										Soap & Pet
									</h1>
									<div className="bg-secondary rounded-b-lg">
										<a href="https://socioextrategico.co/" target="_blank">Go project</a>
										<p>This is a project where I working in the creation.</p>
									</div>
								</div>
							</SwiperSlide>

						</Swiper>
					</div>
					<div className="lg:py-24">
						<h2 className="font-bold sm:text-4xl text-text">My Projects</h2>

						<p className="mt-4 text-gray-600">
							These are some of the projects I have worked on.
						</p>

						<a
							href="#"
							className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
						>
							Get Started Today
						</a>
					</div>
				</div>
			</div>

		</section>
	);
}