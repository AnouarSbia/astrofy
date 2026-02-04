/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				anouarlab: {
					// Primary: Dark Olive Green #32452A
					"primary": "#32452A",
					"primary-content": "#ffffff",

					// Accent: Lime Green #9ACD32
					"accent": "#9ACD32",
					"accent-content": "#32452A",

					// Secondary: Soft Mint / Muted Cream #EEEED1
					"secondary": "#CBEBC0",
					"secondary-content": "#32452A",

					// Neutral tones
					"neutral": "#32452A",
					"neutral-content": "#EEEED1",

					// Base colors (backgrounds)
					"base-100": "#ffffff",
					"base-200": "#EEEED1",
					"base-300": "#CBEBC0",
					"base-content": "#32452A",

					// Info, Success, Warning, Error
					"info": "#3b82f6",
					"info-content": "#ffffff",
					"success": "#32452A",
					"success-content": "#ffffff",
					"warning": "#9ACD32",
					"warning-content": "#32452A",
					"error": "#dc2626",
					"error-content": "#ffffff",
				},
				anouarlabdark: {
					// Dark mode variant
					"primary": "#9ACD32",
					"primary-content": "#32452A",

					"accent": "#CBEBC0",
					"accent-content": "#32452A",

					"secondary": "#EEEED1",
					"secondary-content": "#32452A",

					"neutral": "#EEEED1",
					"neutral-content": "#1a1a1a",

					"base-100": "#1a1a1a",
					"base-200": "#262626",
					"base-300": "#32452A",
					"base-content": "#EEEED1",

					"info": "#3b82f6",
					"info-content": "#ffffff",
					"success": "#CBEBC0",
					"success-content": "#32452A",
					"warning": "#9ACD32",
					"warning-content": "#32452A",
					"error": "#dc2626",
					"error-content": "#ffffff",
				},
			},
		],
		darkTheme: "anouarlabdark",
		logs: false,
	}
}
