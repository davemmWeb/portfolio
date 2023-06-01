import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

export type ContactProps = {
}

interface DataInputs {
	user_name: string
	lastName: string
	user_email: string
	phone: string
	message: string
}

const Contact: React.FC<ContactProps> = () => {
	{/*
	Heads up! 👋
  
	Plugins:
	  - @tailwindcss/forms
  */}
	const [inputs, setInputs] = useState<DataInputs>({
		user_name: '',
		lastName: '',
		user_email: '',
		phone: '',
		message: ''
	})

	const handlerChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setInputs({
			...inputs,
			[name]: value
		})
	}

	const clearInputs = () => {
		setInputs({
			user_name: '',
			lastName: '',
			user_email: '',
			phone: '',
			message: ''
		})
	}
	console.log(inputs)
	const rows = 8

	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e) => {
		e.preventDefault();
		const { user_name, lastName, user_email, phone, message } = inputs
		if (![user_name, lastName, user_email, phone, message].every(Boolean)) {
			Swal.fire({
				icon: "error",
				text: "Please complete all information",
				background: "rgba(51, 51, 51, 1)",
				confirmButtonColor: "rgb(0,0,255)"
			})
			return
		}
		if (form.current)
			emailjs.sendForm('service_yplb73s', 'template_jgx73ij', form.current, 'LyUNhuQIHYXcROxRT')
				.then((result) => {
					console.log(result.text);
					Swal.fire({
						icon: "success",
						text: "Your message was sent successfully",
						background: "rgba(51, 51, 51, 1)",
						confirmButtonColor: "rgb(0,0,255)"
					})
					clearInputs()
				}, (error) => {
					console.log(error.text);
				});
	};

	return (

		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" id='contact'>
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl text-text">Contact me</h1>
			</div>

			<div className="rounded-lg bg-bgOne p-8 shadow-lg lg:col-span-3 lg:p-12">
				<form ref={form} onSubmit={sendEmail} className="space-y-4">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="sr-only" htmlFor="firstName">Name</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Name"
								type="text"
								id="name"
								name="user_name"
								value={inputs.user_name}
								onChange={handlerChange}
							/>
						</div>

						<div>
							<label className="sr-only" htmlFor="lastName">Last name</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Last name"
								type="text"
								id="lastName"
								name="lastName"
								value={inputs.lastName}
								onChange={handlerChange}
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
								name="user_email"
								value={inputs.user_email}
								onChange={handlerChange}
							/>
						</div>

						<div>
							<label className="sr-only" htmlFor="phone">Phone</label>
							<input
								className="w-full p-3 text-sm border-b-2 border-secondary bg-bgOne text-text"
								placeholder="Phone Number"
								type="tel"
								id="phone"
								name="phone"
								value={inputs.phone}
								onChange={handlerChange}
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
							name="message"
							value={inputs.message}
							onChange={handlerChange}
						></textarea>
					</div>

					<div className="mt-4 text-center">
						<button
							type="submit"
							className="inline-block rounded bg-third px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-text shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
							Send Enquiry
						</button>
					</div>
				</form>
			</div>
		</div>)
};

export default Contact;
