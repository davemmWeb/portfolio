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

		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" id='contact'>
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl text-text">Get in touch</h1>
			</div>

			<div className="rounded-lg bg-bgOne p-8 shadow-lg lg:col-span-3 lg:p-12">
				<form action="" className="space-y-4">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="sr-only" htmlFor="firstName">Name</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Name"
								type="text"
								id="name"
							/>
						</div>

						<div>
							<label className="sr-only" htmlFor="phone">Last name</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Last name"
								type="text"
								id="lastName"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="sr-only" htmlFor="email">Email</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Email address"
								type="email"
								id="email"
							/>
						</div>

						<div>
							<label className="sr-only" htmlFor="phone">Phone</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Phone Number"
								type="tel"
								id="phone"
							/>
						</div>
					</div>



					<div>
						<label className="sr-only" htmlFor="message">Message</label>

						<textarea
							className="w-full p-3 text-sm border-2 border-secondary bg-bgOne text-text"
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
