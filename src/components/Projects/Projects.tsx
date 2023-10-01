// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
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
	description: string
	stack: string
}

export default function App() {
	const projects: DataProjects[] = [
		{
			name: "Crissaltex",
			url: crissaltex,
			href: "https://crissaltex.com.co/",
			description: "As a developer, I led the creation of the 'Crissaltex' website, an online store of lingerie products built on WordPress. In addition to using WordPress for the foundation of the site, I added custom scripts with JavaScript to improve functionality and provide a more interactive shopping experience. Discover how this combination of technologies elevates the online user experience.",
			stack: "WordPress, JavaScript"
		},
		{
			name: "Socioextrategico",
			url: socioextrategico,
			href: "https://socioextrategico.co/",
			description: "'SocioStrategic' was an exciting startup application that I developed with a great team to provide innovative solutions. From efficient resource management to data-driven decision making, this platform is designed to help businesses achieve their strategic goals effectively.",
			stack: "Java, Spring, React, TypesCript"
		},
		{
			name: "Farmastack",
			url: farmastack,
			href: "https://main--gleaming-mooncake-32ca84.netlify.app/",
			description: "My final project during Henry's bootcamp is an exciting virtual pharmacy designed to provide convenience and accessibility to patients. This platform allows users to explore pharmaceutical products, consult detailed information and place orders securely online, in addition to a dashboard for administration that can only be accessed with administrator permissions. With a friendly design and a focus on health and wellness, this app represents my dedication to developing practical and effective solutions.",
			stack: "React, Redux, Redux-persist, Tailwind, Node, Express, PostgreSQL, Sequelize, Cloudinary, Auth0, JWT"
		},
		{
			name: "Dogs",
			url: dogs,
			href: "https://dogs-snowy.vercel.app/?vercelToolbarCode=kLlFoPen2111luq",
			description: "My solo project during Henry's bootcamp is an exciting dog breed manager that leverages an external API to populate a database and then generate responses in JSON format from a backend that are consumed by the front end in an attractive and controlled way. With this app, users can browse a variety of dog breeds, page results, delete records, create new entries, and edit detailed information. Developed with passion, this project demonstrates my ability to create functional and attractive applications.",
			stack: "React, Redux, PostgreSQL, Sequelize, Style-component"
		},
		{
			name: "Rick and Morty",
			url: rick,
			href: "https://project-rick-and-morty-sigma.vercel.app/",
			description: "My project 'Rick and Morty' is an exciting journey through the multiverse of this iconic television series. Leveraging the “Rick and Morty” API, users can explore and discover detailed information about characters, episodes, and locations from the series. Developed with cutting-edge technologies and consuming real-time data from the API, this project represents my passion for building interactive and educational experiences that connect with fans of the series.",
			stack: "React, Redux, PostgreSQL, Sequelize, Style-component"
		},
	]
	return (
		<section id="projects" className="bg-bgOne text-white" style={{ margin: 20 }}>
			<div style={{ boxShadow: "40px", margin: 20 }}>
				<h1 className="text-3xl text-center sm:text-4xl font-bold" style={{ marginBottom: "2rem" }}>Projects</h1>
				<p className="text-third text-center mb-2 font-bold" style={{ marginBottom: "2rem" }}>Click on the image to see the deploy</p>
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
								<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 text-center">
									<div>
										<a href={pro.href} target="_blank">
											<img src={pro.url} alt={pro.name} />
										</a>
									</div>
									<div style={{ margin: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
										<h1 style={{ marginBottom: 8 }}>{pro.name}</h1>
										<p style={{ fontSize: "12px", marginBottom: 8 }}>{pro.description}</p>
										<p style={{ marginBottom: 8 }}>Tecnologies</p>
										<p>{pro.stack}</p>
									</div>

								</div>
							</SwiperSlide>
						})
					}

				</Swiper>
			</div>
		</section>

	);
}