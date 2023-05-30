import React from 'react';
import imagePortfolio from '../../assets/profile2.png'

export type ProfileProps = {
}

const Profile: React.FC<ProfileProps> = () => {
	return <div className="mx-auto max-w-5xl px-4 py-8">
		<section className="rounded-lg bg-primary p-8">
			<div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
				<img
					alt="Man"
					src={imagePortfolio}
					className="rounded-full h-40"
				/>

				<blockquote className="sm:col-span-2">
					<h1 className='text-text text-xl font-medium sm:text-2xl'>Hi, I am David Duarte</h1>
					<p className="text-secondary font-medium ">
						Full Stack Developer
					</p>
					<div className="space-x-4">
						<button className='bg-third text-text '><span className='text-sm'>Dowload CV</span></button>
						<button className='text-text border-secondary border-2 text-sm'>Learn More</button>
					</div>
				</blockquote>
			</div>
		</section>
	</div>;
};

export default Profile;
