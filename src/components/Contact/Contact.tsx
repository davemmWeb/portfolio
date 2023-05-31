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

					<div className="mt-4 text-center">
						<button
							type="button"
							className="inline-block rounded bg-third px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-text shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
							Send Enquiry
						</button>
					</div>
				</form>
			</div>
		</div>)
};

export default Contact;
