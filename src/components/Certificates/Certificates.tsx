import React from 'react';
import Swal from 'sweetalert2';

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
			description: "The Scrum Certification offered by SENA (National Learning Service) is a professional credential that validates an individual's knowledge and skills in implementing Scrum methodologies for project management. Scrum is an agile framework widely used in software development and other industries to improve team collaboration, efficiency, and product delivery."
		},
		{
			name: "Full Stack Web Developer",
			description: "Henry's Full Stack Web Developer Certification is a comprehensive program designed to equip individuals with the skills and knowledge to master both front-end and back-end web development. Henry is a renowned educational institution known for its immersive and hands-on approach to teaching web development."
		},
	]

	const showDetail = (detail) => {
		Swal.fire(detail)
	}
	return <section className="bg-bgOne text-white" id='certifications'>
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
					certificates.map((certificate, i) => (
						<div key={i}
							className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-third/10 hover:shadow-third/10 bg-bgTwo text-center"

						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10 text-third"
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
							<div className="space-x-4 mt-6">
								<button
									type="button"
									className="inline-block rounded bg-third px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-text shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
									Certificate
								</button>
								<button
									onClick={() => showDetail(certificate.description)}
									type="button"
									className="mt-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-text shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
									Learn More
								</button>
							</div>
						</div>
					))
				}


			</div>

			{/* <div className="mt-12 text-center">
				<a
					href="#"
					className="inline-block rounded bg-third px-12 py-3 text-sm font-medium text-white transition hover:bg-third focus:outline-none focus:ring focus:ring-text"
				>
					Get Started Today
				</a>
			</div> */}
		</div>
	</section>;
};

export default Certificates;
