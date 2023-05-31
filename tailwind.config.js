/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bgOne: "rgba(23, 23, 23, 1)",
				bgTwo: "rgba(51, 51, 51, 1)",
				transparent: "rgba(255, 255, 255, 0.2)",
				secondary: "rgba(130, 130, 130, 1)",
				third: "rgb(0,0,255)",
				text: "rgba(255, 255, 255, 1)",
			},
		},
	},
	plugins: ["@tailwindcss/forms"],
};
