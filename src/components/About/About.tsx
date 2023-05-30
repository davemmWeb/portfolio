import React from 'react';

export type AboutProps = {
}

interface DataLink {
	title: string
	name: string
	url: string
	icon: string
}

const About: React.FC<AboutProps> = () => {
	const links: DataLink[] = [
		{
			title: "Full Name",
			name: "David Duarte",
			url: "",
			icon: ""
		},
		{
			title: "Email Address",
			name: "davemm.ku@gmail.com",
			url: "davemm.ku@gmail.com",
			icon: ""
		},
		{
			title: "whatsapp",
			name: "David",
			url: "https://wa.link/yhfrw5",
			icon: "fab fa-whatsapp"
		},
		{
			title: "github",
			name: "davemmWeb",
			url: "https://github.com/davemmWeb",
			icon: "fab fa-github"
		},
		{
			title: "linkedin",
			name: "davemmWeb",
			url: "https://www.linkedin.com/in/david-duarte-5756031b9/",
			icon: "fab fa-linkedin"
		},
	]
	return <section className="bg-primary text-white">
		<div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
			<div className="max-w-xl">
				<h2 className="text-3xl font-bold sm:text-4xl">About</h2>

				<p className="mt-4 text-gray-300">
					My name is David Duarte, software engineer and fullstack developer with more than 4 years
					of experience in web application development solutions, advanced knowledge in Html, Css,
					JavaScript, Vue, Vuex, Next, Node, Express, React, Redux I also have With experience in
					relational databases MySQL, PostgreSQL, Sequelice and management of GitHub version controllers.
					I focus on solving problems and I love teamwork. I also like to collaborate on interface design.
				</p>
			</div>

			<div
				className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
			>

				{
					links.map((link, i) => {
						return <div key={i} className="flex items-start gap-4">
							<span className="shrink-0 rounded-full bg-gray-800 p-4">
								<a href={link.url} target='_blank' className={link.icon}></a>
							</span>

							<div>
								<h2 className="text-lg font-bold">{link.title}</h2>

								<p className="mt-1 text-sm text-gray-300">
									{link.name}
								</p>
							</div>
						</div>
					})
				}
			</div>
		</div>
	</section>;
};

export default About;
