import React from 'react';

export type CertificatesProps = {

}
interface DataCertificate {
	name: string
	description: string
}
const Certificates: React.FC<CertificatesProps> = () => {
	const certificates: DataCertificate[] = [
		{
			name: "Introduction to Cloudinary for Node.js",
			description: "Cloudinary Certification is a professional credential that validates an individual's expertise in working with the Cloudinary platform. Cloudinary is a leading cloud-based media management solution that enables businesses to securely upload, store, manipulate, and deliver images and videos at scale."
		},
		{
			name: "APPLICATION OF THE SCRUM FRAMEWORK FOR SOFTWARE DEVELOPMENT PROJECTS",
			description: "La Certificación Scrum que ofrece el SENA (Servicio Nacional de Aprendizaje) es una credencial profesional que valida los conocimientos y habilidades de un individuo en la implementación de metodologías Scrum para la gestión de proyectos. Scrum es un marco ágil ampliamente utilizado en el desarrollo de software y otras industrias para mejorar la colaboración en equipo, la eficiencia y la entrega de productos."
		},
		{
			name: "Full Stack Web Developer",
			description: "La Certificación de desarrollador web Full Stack que ofrece Henry es un programa integral diseñado para equipar a las personas con las habilidades y los conocimientos necesarios para dominar el desarrollo web tanto front-end como back-end. Henry es una institución educativa de renombre conocida por su enfoque inmersivo y práctico para la enseñanza del desarrollo web."
		},
	]
	return <section className="bg-primary text-white">
		<div
			className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
		>
			<div className="mx-auto max-w-lg text-center">
				<h2 className="text-3xl font-bold sm:text-4xl">What I do</h2>

				<p className="mt-4 text-gray-300">
					Some certifications and degrees obtained
				</p>
			</div>
			<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">


				{
					certificates.map((certificate, i) => {
						return <a key={i}
							className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-terseary/10 hover:shadow-terseary/10"
							href="/services/digital-campaigns"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10 text-terseary"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z" />
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								/>
							</svg>

							<h2 className="mt-4 text-xl font-bold text-white">{certificate.name}</h2>

							<p className="mt-1 text-sm text-gray-300">
								{certificate.description}
							</p>
						</a>
					})
				}


			</div>

			<div className="mt-12 text-center">
				<a
					href="#"
					className="inline-block rounded bg-terseary px-12 py-3 text-sm font-medium text-white transition hover:bg-terseary focus:outline-none focus:ring focus:ring-text"
				>
					Get Started Today
				</a>
			</div>
		</div>
	</section>;
};

export default Certificates;
