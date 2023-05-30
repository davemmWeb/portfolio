import React from 'react';

export type ContactProps = {
}

const Contact: React.FC<ContactProps> = () => {
	{/*
	Heads up! 👋
  
	Plugins:
	  - @tailwindcss/forms
  */}
	const rows = 8
	return (

		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl text-text">Get in touch</h1>
			</div>

			<div className="rounded-lg bg-primary p-8 shadow-lg lg:col-span-3 lg:p-12">
				<form action="" className="space-y-4">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="sr-only" htmlFor="email">Email</label>
							<input
								className="w-full rounded-lg border-gray-200 p-3 text-sm  bg-primary"
								placeholder="Email address"
								type="email"
								id="email"
							/>
						</div>

						<div>
							<label className="sr-only" htmlFor="phone">Phone</label>
							<input
								className="w-full rounded-lg border-gray-200 p-3 text-sm  bg-primary"
								placeholder="Phone Number"
								type="tel"
								id="phone"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="sr-only" htmlFor="email">Email</label>
							<input
								className="w-full rounded-lg border-gray-200 p-3 text-sm  bg-primary"
								placeholder="Email address"
								type="email"
								id="email"
							/>
						</div>

						<div>
							<label className="sr-only" htmlFor="phone">Phone</label>
							<input
								className="w-full rounded-lg border-gray-200 p-3 text-sm  bg-primary"
								placeholder="Phone Number"
								type="tel"
								id="phone"
							/>
						</div>
					</div>



					<div>
						<label className="sr-only" htmlFor="message">Message</label>

						<textarea
							className="w-full rounded-lg border-gray-200 p-3 text-sm  bg-primary"
							placeholder="Message"
							rows={rows}
							id="message"
						></textarea>
					</div>

					<div className="mt-4">
						<button
							type="submit"
							className="inline-block w-full rounded-lg bg-third px-5 py-3 text-text font-medium sm:w-auto"
						>
							Send Enquiry
						</button>
					</div>
				</form>
			</div>
		</div>)
};

export default Contact;
