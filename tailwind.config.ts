import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			black: {
  				'100': '#000319',
  				'200': 'rgba(17, 25, 40, 0.75)',
  				'300': 'rgba(255, 255, 255, 0.125)',
  				DEFAULT: '#000'
  			},
  			white: {
  				'100': '#BEC1DD',
  				'200': '#C1C2D3',
  				DEFAULT: '#FFF'
  			},
  			blue: {
				'50': '#f4f9f9',
				'100': '#dbecea',
				'200': '#b7d8d7',
				'300': '#8abdbc',
				'400': '#629f9f',
				'500': '#488384',
				'600': '#386669',
				'700': '#305355',
				'800': '#2a4245',
				'900': '#26393b',
				'950': '#121f21',
  			},
  			coral: {
  				DEFAULT: '#FF6F61',
  				light: '#FFD9C8'
  			},
  			neutral: {
  				gray: '#B8C1C8',
  				charcoal: '#4A4A4A',
  				soft: '#F2F2F2'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			mukta: [
  				'Mukta',
  				'sans-serif'
  			],
  			manrope: [
  				'Manrope',
  				'sans-serif'
  			],
  			gill: [
  				'Gill Sans',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			sm: '325px',
  			md: '425px',
  			lg: '768px',
  			xl: '1024px',
  			'2px': '1440px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
