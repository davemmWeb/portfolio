// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import crissaltex from '../../assets/crissaltex.png';
import dogs from '../../assets/dogs.png';
import farmastack from '../../assets/farmaStack.png';
import rick from '../../assets/rick_y_morty.png';
import socioextrategico from '../../assets/socio.png';

interface DataProjects {
	name: string
	url: string
	href: string
}

export default function App() {
	const projects: DataProjects[] = [
		{
			name: "Crissaltex",
			url: crissaltex,
			href: "https://crissaltex.com.co/"
		},
		{
			name: "Socioextrategico",
			url: socioextrategico,
			href: "https://socioextrategico.co/"
		},
		{
			name: "Farmastack",
			url: farmastack,
			href: "https://main--gleaming-mooncake-32ca84.netlify.app/"
		},
		// {
		// 	name: "Shopping List",
		// 	url: shopping,
		// 	href: "https://shopping-list-fawn.vercel.app/"
		// },
		{
			name: "Dogs",
			url: dogs,
			href: "https://dogs-snowy.vercel.app/?vercelToolbarCode=kLlFoPen2111luq"
		},
		{
			name: "Rick and Morty",
			url: rick,
			href: "https://project-rick-and-morty-sigma.vercel.app/"
		},
	]
	return (
		<section id="projects">
			<div
				className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
			>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div
						className="relative overflow-hidden rounded-lg sm:h-80 lg:order-last"
					>
						<h1 className="text-text text-center mb-2">Click on the image to see the deploy</h1>
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
							{
								projects.map((pro, i) => {
									return <SwiperSlide key={i}>

										<a href={pro.href} target="_blank">
											<img src={pro.url} alt={pro.name} />
										</a>
									</SwiperSlide>
								})
							}

						</Swiper>
					</div>
					<div className="lg:py-24">
						<h2 className="font-bold sm:text-4xl text-text text-center">My Projects</h2>

						<p className="mt-4 text-gray-600 text-center">
							These are some of the projects I have worked on.
						</p>
					</div>
				</div>
			</div>

		</section>
	);
}