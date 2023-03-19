/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {},
	extend: {
	  transitionProperty: {
		 'width': 'width',
	  }
	},
 }, 
  plugins: [],
}
