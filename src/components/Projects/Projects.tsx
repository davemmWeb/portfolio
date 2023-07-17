// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import anime from '../../assets/Anime.png';
import countries from '../../assets/countries.png';
import dbz from '../../assets/dbz.png';
import farmastack from '../../assets/farmaStack.png';
import marvel from '../../assets/marvel.png';
import rick from '../../assets/rick_y_morty.png';
import dogs from '../../assets/dogs.png';
import socioextrategico from '../../assets/socio.png';

interface DataProjects {
	name: string
	url: string
	href: string
}

export default function App() {
	const projects: DataProjects[] = [
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
		{
			name: "Marvel",
			url: marvel,
			href: "https://prueba-d-corp.vercel.app/"
		},
		{
			name: "Dbz",
			url: dbz,
			href: "https://davemmweb.github.io/project_typescript/"
		},
		{
			name: "Anime",
			url: anime,
			href: "https://prueba-opperweb.vercel.app/"
		},
		{
			name: "Dogs",
			url: dogs,
			href: "https://dogs-snowy.vercel.app/?vercelToolbarCode=kLlFoPen2111luq"
		},
		{
			name: "Rick and Morty",
			url: rick,
			href: "https://davemmweb.github.io/project_rick_and_morty/#/"
		},
		{
			name: "Countries",
			url: countries,
			href: "https://countriesclient-production.up.railway.app/home"
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