import React from 'react';
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/Typescript.png'
import react from '../../assets/react.svg'
import html from '../../assets/html.png'
import redux from '../../assets/redux.png'
import next from '../../assets/next.jpeg'
import vue from '../../assets/vue.png'
import css from '../../assets/css.svg'

export type SkillsProps = {
}

interface DataSkills {
	name: string
	src: string
	percentage: string
}


const Skills: React.FC<SkillsProps> = () => {

	const skills: DataSkills[] = [
		{
			name: "Javascript",
			src: javascript,
			percentage: "90%"
		},
		{
			name: "Html",
			src: html,
			percentage: "90%"
		},
		{
			name: "Typescript",
			src: typescript,
			percentage: "50%"
		},
		{
			name: "React",
			src: react,
			percentage: "70%"
		},
		{
			name: "Css",
			src: css,
			percentage: "90%"
		},
		{
			name: "Redux",
			src: redux,
			percentage: "90%"
		},
		{
			name: "Vue",
			src: vue,
			percentage: "70%"
		},
		{
			name: "Next",
			src: next,
			percentage: "70%"
		},
	]
	return <section className="bg-bgOne text-white" id='skills'>
		<div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
			<div className="ml-30 md:ml-5 text-center">
				<h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
				<p className="mt-4 text-gray-300">
					Some of my most outstanding experiences in my profession
				</p>
			</div>

			<div
				className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-4"
			>
				{skills.map((skill, i) => (
					<div key={i} className="gap-4 p-2 shadow-xl transition hover:border-third/10 hover:shadow-third/10">
						<h2 className="text-2xl font-bold text-secondary" style={{ marginLeft: "40%" }}>{skill.percentage}</h2>
						<img src={skill.src} alt={skill.name} className="h-8 w-8 md:h-24 md:w-24 sm:h-20 sm:w-20" style={{ marginLeft: "40%" }} />
						<p className="mt-1 text-lg text-third" style={{ marginLeft: "35%" }}>{skill.name}</p>
					</div>
				))}

			</div>
		</div>
	</section>;
};

export default Skills;
