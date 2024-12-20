import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./lib/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				fenix: "url(/phenix.png)",
			},
			gridTemplateColumns: {
				"13": "repeat(13, minmax(0, 1fr))",
			},
			colors: {
				blue: {
					400: "#2589FE",
					500: "#0070F3",
					600: "#2F6FEB",
				}
			
			},
			scale: {
				"-100": "-1",
				"-90": "-0.9",
				"-80": "-0.8",
        "+1":"1.12"
			},
		},
		keyframes: {
			shimmer: {
				"100%": {
					transform: "translateX(100%)",
				},
			},
		},
	},
	variants: {
		writingMode: ['responsive', 'hover', 'focus'],
		direction: ['responsive', 'ltr', 'rtl'],
	},
	plugins: [require("@tailwindcss/forms")],
};
export default config;
