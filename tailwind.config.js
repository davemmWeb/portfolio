/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgba(23, 23, 23, 1)",
				secondary: "rgba(130, 130, 130, 1)",
				bgTwo: "rgba(51, 51, 51, 1)",
				third: "rgb(0,0,255)",
				text: "rgba(255, 255, 255, 1)",
			},
		},
	},
	plugins: ["@tailwindcss/forms"],
};
