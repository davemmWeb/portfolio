import React from 'react';
import imagePortfolio from '../../assets/profile2.png'

export type ProfileProps = {
}

const Profile: React.FC<ProfileProps> = () => {
	return <div className="mx-auto max-w-5xl px-4 py-8 mt-12" id='profile'>
		<section className="rounded-lg bg-bgOne p-8">
			<div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">

				<blockquote className="sm:col-span-2 text-center">
					<h1 className='text-text text-xl font-medium sm:text-2xl'>Hi, I am David Duarte</h1>
					<p className="text-secondary font-medium mt-4">
						Full Stack Developer
					</p>
					<div className="space-x-4 mt-6">
						<button
							type="button"
							className="inline-block rounded bg-third px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-text shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
							Dowload CV
						</button>
						<button
							type="button"
							className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-text shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
							Learn More
						</button>
					</div>
				</blockquote>
				<img
					alt="Man"
					src={imagePortfolio}
					className="block rounded-xl border border-gray-800 shadow-xl transition hover:border-third/10 hover:shadow-third/10 bg-bgTwo text-center"
					style={{ width: "10rem" }}
				/>
			</div>
		</section>
	</div>;
};

export default Profile;
